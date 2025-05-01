import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const getData = async (): Promise<Payment[]> => {
  return [
    {
      "id": "728ed521",
      "amount": 134,
      "status": "processing",
      "username": "Ahmed Khan",
      "email": "ahmedkhan@gmail.com"
    },
    {
      "id": "728ed522",
      "amount": 124,
      "status": "success",
      "username": "Fatima Ali",
      "email": "fatimaali@gmail.com"
    },
    {
      "id": "728ed523",
      "amount": 167,
      "status": "success",
      "username": "Usman Siddiqui",
      "email": "usmansiddiqui@gmail.com"
    },
    {
      "id": "728ed524",
      "amount": 156,
      "status": "failed",
      "username": "Samina Tariq",
      "email": "saminatariq@gmail.com"
    },
    {
      "id": "728ed525",
      "amount": 145,
      "status": "success",
      "username": "Hina Raza",
      "email": "hinaraza@gmail.com"
    },
    {
      "id": "728ed526",
      "amount": 189,
      "status": "pending",
      "username": "Zain Abbas",
      "email": "zainabbas@gmail.com"
    },
    {
      "id": "728ed527",
      "amount": 178,
      "status": "processing",
      "username": "Nadia Rehman",
      "email": "nadiarehman@gmail.com"
    },
    {
      "id": "728ed528",
      "amount": 190,
      "status": "success",
      "username": "Bushra Javed",
      "email": "bushrajaved@gmail.com"
    },
    {
      "id": "728ed529",
      "amount": 134,
      "status": "failed",
      "username": "Tariq Mahmood",
      "email": "tariqmahmood@gmail.com"
    },
    {
      "id": "728ed52a",
      "amount": 543,
      "status": "success",
      "username": "Imran Qureshi",
      "email": "imranqureshi@gmail.com"
    },
    {
      "id": "728ed52b",
      "amount": 234,
      "status": "pending",
      "username": "Bilal Shah",
      "email": "bilalshah@gmail.com"
    },
    {
      "id": "728ed52c",
      "amount": 345,
      "status": "success",
      "username": "Kashif Aziz",
      "email": "kashifaziz@gmail.com"
    },
    {
      "id": "728ed52d",
      "amount": 335,
      "status": "failed",
      "username": "Shazia Akhtar",
      "email": "shaziaakhtar@gmail.com"
    },
    {
      "id": "728ed52e",
      "amount": 664,
      "status": "pending",
      "username": "Junaid Iqbal",
      "email": "junaidiqbal@gmail.com"
    },
    {
      "id": "728ed52f",
      "amount": 332,
      "status": "success",
      "username": "Rizwan Butt",
      "email": "rizwanbutt@gmail.com"
    },
    {
      "id": "728ed52g",
      "amount": 413,
      "status": "failed",
      "username": "Saba Mir",
      "email": "sabamir@gmail.com"
    },
    {
      "id": "728ed52h",
      "amount": 345,
      "status": "pending",
      "username": "Areeba Haider",
      "email": "areebahaider@gmail.com"
    },
    {
      "id": "728ed52i",
      "amount": 754,
      "status": "success",
      "username": "Farhan Zafar",
      "email": "farhanzafar@gmail.com"
    },
    {
      "id": "728ed52j",
      "amount": 643,
      "status": "failed",
      "username": "Asma Khalid",
      "email": "asmakhalid@gmail.com"
    },
    {
      "id": "728ed52k",
      "amount": 543,
      "status": "pending",
      "username": "Shahbaz Niazi",
      "email": "shahbazniazi@gmail.com"
    },
    {
      "id": "728ed52l",
      "amount": 324,
      "status": "success",
      "username": "Lubna Saeed",
      "email": "lubnasaeed@gmail.com"
    },
    {
      "id": "728ed52m",
      "amount": 123,
      "status": "pending",
      "username": "Sana Jamil",
      "email": "sanajamil@gmail.com"
    },
    {
      "id": "728ed52n",
      "amount": 422,
      "status": "failed",
      "username": "Kamal Nasir",
      "email": "kamalnasir@gmail.com"
    },
    {
      "id": "728ed52o",
      "amount": 712,
      "status": "success",
      "username": "Yasir Mehmood",
      "email": "yasirmehmood@gmail.com"
    },
    {
      "id": "728ed52p",
      "amount": 360,
      "status": "success",
      "username": "Fahad Hussain",
      "email": "fahadhussain@gmail.com"
    },
    {
      "id": "728ed52q",
      "amount": 454,
      "status": "pending",
      "username": "Mahnoor Ilyas",
      "email": "mahnoorilyas@gmail.com"
    },
    {
      "id": "728ed52r",
      "amount": 382,
      "status": "success",
      "username": "Owais Gill",
      "email": "owaisgill@gmail.com"
    },
    {
      "id": "728ed52s",
      "amount": 328,
      "status": "failed",
      "username": "Ibrahim Chaudhry",
      "email": "ibrahimchaudhry@gmail.com"
    },
    {
      "id": "728ed52t",
      "amount": 250,
      "status": "success",
      "username": "Adeel Mughal",
      "email": "adeelmughal@gmail.com"
    },
    {
      "id": "728ed52u",
      "amount": 658,
      "status": "success",
      "username": "Noman Asif",
      "email": "nomanasif@gmail.com"
    },
    {
      "id": "728ed52v",
      "amount": 691,
      "status": "success",
      "username": "Mehwish Aftab",
      "email": "mehwishaftab@gmail.com"
    },
    {
      "id": "728ed52w",
      "amount": 969,
      "status": "success",
      "username": "Waleed Shahid",
      "email": "waleedshahid@gmail.com"
    },
    {
      "id": "728ed52x",
      "amount": 617,
      "status": "failed",
      "username": "Nargis Sattar",
      "email": "nargissattar@gmail.com"
    },
    {
      "id": "728ed52y",
      "amount": 173,
      "status": "success",
      "username": "Taha Anwar",
      "email": "tahaanwar@gmail.com"
    },
    {
      "id": "728ed52z",
      "amount": 843,
      "status": "success",
      "username": "Laiba Zeeshan",
      "email": "laibazeeshan@gmail.com"
    },
    {
      "id": "728ed521f",
      "amount": 914,
      "status": "pending",
      "username": "Sundas Amin",
      "email": "sundasamin@gmail.com"
    }
  ]
};

const PaymentsPage = async () => {

  const data = await getData();

  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Payments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='mt-5 mb-8 p-2 bg-primary-foreground rounded-md'>
        <h1 className='font-semibold'>All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentsPage