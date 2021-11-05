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
    title: 'ĐỘ TUỔI',
    name: 'age',
    list: [
      { title: '11 - 15', href: '', id: 1 },
      { title: '3+', href: '', id: 2 },
      { title: '6+', href: '', id: 3 },
      { title: '9+', href: '', id: 4 },
    ],
  },
  {
    title: 'HÌNH THỨC',
    name: 'type',
    list: [
      { title: 'Bìa Mềm', href: '', id: 1 },
      { title: 'Bộ Hộp', href: '', id: 2 },
      { title: 'Bìa Cứng', href: '', id: 3 },
    ],
  },
  {
    title: 'MÀU SẮC',
    name: 'color',
    list: [
      { title: 'Nhiều màu', href: '', id: 1 },
      { title: 'Đơn màu', href: '', id: 2 },
    ],
  },
  {
    title: 'NGÔN NGỮ',
    name: 'language',
    list: [
      { title: 'Tiếng Việt', href: '', id: 1 },
      { title: 'Tiếng Anh', href: '', id: 2 },
    ],
  },
  {
    title: 'XUẤT XỨ',
    name: 'madein',
    list: [
      { title: 'Việt Nam', href: '', id: 1 },
      { title: 'Trung Quốc', href: '', id: 2 },
      { title: 'Nhật Bản', href: '', id: 3 },
    ],
  },
];
