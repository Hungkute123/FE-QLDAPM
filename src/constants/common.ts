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
      { title: '0 - 100.000đ', href: '', id: 1 },
      { title: '100.000đ - 300.000đ', href: '', id: 2 },
      { title: '>300.000đ', href: '', id: 3 },
    ],
  },
  {
    title: 'HÌNH THỨC',
    name: 'typeproduct',
    list: [
      { title: 'Sách, vở', href: '', id: 1 },
      { title: 'Dụng cụ học tập', href: '', id: 2 },
    ],
  },
  {
    title: 'Nhà xuất bản',
    name: 'supplier',
    list: [
      { title: 'NXB Trẻ', href: '', id: 1 },
      { title: 'Nhà Xuất Bản Kim Đồng', href: '', id: 2 },
      { title: 'Nhà xuất bản Giáo Dục', href: '', id: 3 },
    ],
  },
  {
    title: 'Chất liệu',
    name: 'coverform',
    list: [
      { title: 'Bìa mềm', href: '', id: 1 },
      { title: 'Bìa cứng', href: '', id: 2 },
    ],
  },
];
