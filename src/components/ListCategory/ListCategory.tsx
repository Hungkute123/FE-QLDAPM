import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import './ListCategory.scss';
import { getCategoryProductByIDParentLevelTwo } from '../../redux/slice/appSlice/categorySlice';

export const ListCategory: React.FC<IListCategory> = ({ title, idparent, keymap }) => {
  const { categoryLevelTwo } = useSelector((state: RootState) => state.categorySlice);
  let tempCategory:any;
  tempCategory = [];
  const [category, SetCategory] = useState(tempCategory);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategoryProductByIDParentLevelTwo({ idparent: idparent }));
   
    SetCategory(categoryLevelTwo);
  }, []);
  const handleList = (item:any, i:number) =>{
    if(keymap == i ){
      item.data.map((item: any, i: number) => {
        return( <li key={i} className="list-category__detail">
        {item.Name}
      </li>)
       })
    }
     return(<li className="list-category__detail">{i}</li>)
  }
  return (
    <div className="list-category">
      <div className="list-category__title">{title}</div>
      <ul>
      <li  className="list-category__detail">
           {idparent}
         </li>
      {category &&
          category.map((item: any, i: number) => {
             return handleList(item,i)
        })}
        <li className="list-category__more">Xem thêm...</li>
      </ul>
    </div>
  );
};
