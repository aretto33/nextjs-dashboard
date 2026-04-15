'use server';
import { z } from 'zod';
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';
import postgres from 'postgres';
 const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'})

const FormSchema = z.object ({
    id:z.string(),
    customerId: z.string(),
    amount: z.number(),
    status: z.enum(['pending','paid']),
    date: z.string(),
});
const CreateInvoice = FormSchema.omit({id:true,date:true});

export async function createInvoice(formData : FormData) {
    const {customerId,amount,status} = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('customerId'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
    await sql `INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amount}, ${status}, ${date})`;
    //Once the database has been updated, the /dashboard/invoices path will be revalidated, and fresh data will be fetched from the server.
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')
}