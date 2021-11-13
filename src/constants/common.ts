import {
  IMenuDiscount,
  IMenuEconomic,
  IMenuFlashSale,
  IMenuGame,
  IMenuHealthCare,
  IMenuManga,
  IMenuOld,
  IMenuStationery,
  IMenuSuggestion,
  IMenuTrend,
} from './images';
import { AiFillStar } from 'react-icons/ai';

export const MenuList = [
  {
    id: 1,
    image: IMenuFlashSale,
    title: 'Flash Sale',
  },
  {
    id: 2,
    image: IMenuDiscount,
    title: 'Mã giảm giá',
  },
  {
    id: 3,
    image: IMenuOld,
    title: 'Phiên chợ sách cũ',
  },
  {
    id: 4,
    image: IMenuTrend,
    title: 'Xu hướng',
  },
  {
    id: 5,
    image: IMenuHealthCare,
    title: 'Health Care',
  },
  {
    id: 6,
    image: IMenuStationery,
    title: 'Văn phòng phẩm',
  },
  {
    id: 7,
    image: IMenuSuggestion,
    title: 'Gợi ý cho bạn',
  },
  {
    id: 8,
    image: IMenuGame,
    title: 'Đồ chơi',
  },
  {
    id: 9,
    image: IMenuManga,
    title: 'Manga - Comic',
  },
  {
    id: 10,
    image: IMenuEconomic,
    title: 'Kinh tế',
  },
];

export const FilterOption = [
  {
    title: 'GIÁ CẢ',
    name: 'price',
    list: [
      { title: '0 - 100.000đ', href: '', id: 1, value: '0 and 100000' },
      { title: '100.000đ - 300.000đ', href: '', id: 2, value: '100000 and 300000' },
      { title: '>300.000đ', href: '', id: 3, value: '> 300000' },
    ],
  },
  {
    title: 'HÌNH THỨC',
    name: 'typeproduct',
    list: [
      { title: 'Sách, vở', href: '', id: 1, value: 'Sách, vở' },
      { title: 'Dụng cụ học tập', href: '', id: 2, value: 'Dụng cụ học tập' },
    ],
  },
  {
    title: 'Đánh giá',
    name: 'votes',
    list: [
      { title: '1 sao', href: '', id: 1, value: '1 sao' },
      { title: '2 sao', href: '', id: 2, value: '2 sao' },
      { title: '3 sao', href: '', id: 3, value: '3 sao' },
      { title: '4 sao', href: '', id: 4, value: '4 sao' },
      { title: '5 sao', href: '', id: 5, value: '5 sao' },
    ],
  },
];
