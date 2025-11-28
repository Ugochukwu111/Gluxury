import { AdminLayout } from "../../components/Admin/AdminLayout";
import { Announcement } from "../../components/Announcement";

import './HomePage.css'

export function AdminHomePage(){

  const metrics =[
    {
      name:'Total Revenue',
      number: '$800,000',
      icon: '',
      oldPercentage: 24.3,
      newPercentage:  25.5,
    },
    {
      name:'Total Order',
      number: '2500',
      icon: '',
      oldPercentage: 24.3,
      newPercentage:  25.5,
    },
      {
      name:'Total Customers',
      number: '2500',
      icon: '',
      oldPercentage: 24.3,
      newPercentage:  25.5,
    },
    {
      name:'Total products',
      number: '2500',
      icon: '',
      oldPercentage: 24.3,
      newPercentage:  25.5,
    }
  ]



  return (
    <AdminLayout>
     <Announcement/>
    </AdminLayout>
  );
}