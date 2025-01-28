import React from 'react';
import { AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineStock, AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { BiColorFill } from 'react-icons/bi';
import { BsKanban, BsBarChart } from 'react-icons/bs';
import { FiShoppingBag, FiEdit, FiPieChart } from 'react-icons/fi';
import { GiLouvrePyramid } from 'react-icons/gi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';

import { RiHome6Line } from "react-icons/ri";
import { PiPackageDuotone } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <RiHome6Line />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'item',
        icon: <PiPackageDuotone />,
      },
      {
        name: 'employee',
        icon: <FiUser />,
      },
      {
        name: 'supplier',
        icon: <TbTruckDelivery />,
      },
    ],
  }
];
