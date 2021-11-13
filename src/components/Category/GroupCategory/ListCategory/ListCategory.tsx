import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/rootReducer';
import './ListCategory.scss';
import { getCategoryProductByIDParentLevelTwo } from '../../../../redux/slice/appSlice/categorySlice';

export const ListCategory: React.FC<IListCategory> = ({ title, idparent, keymap }) => {
  const { categoryLevelTwo } = useSelector((state: RootState) => state.categorySlice);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryProductByIDParentLevelTwo({ idparent: idparent }));
  }, []);
  const handleList = (item:any, i:number) =>{
    if(keymap == i ){
      return item.data.map((item1: any, i1: number) => {
        return( <li key={i1} className="list-category__detail">
        {item1.Name}
      </li>)
       })
    }
  }
  return (
    <div className="list-category">
      <div className="list-category__title">{title}</div>
      <ul>
      {categoryLevelTwo &&
          categoryLevelTwo.map((item: any, i: number) => {
             return handleList(item,i)
        })}
        <li className="list-category__more">Xem thêm...</li>
      </ul>
    </div>
  );
};
