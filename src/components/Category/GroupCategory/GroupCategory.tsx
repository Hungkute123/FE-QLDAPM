import React, { useEffect,Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { getCategoryProductByIDParentLevelOne } from '../../../redux/slice/appSlice/categorySlice';
// import ListCategory = React.lazy(()=>import('../ListCategory/ListCategory'))
 import { ListCategory } from './ListCategory/ListCategory';
 import LazyLoad from 'react-lazyload';
import './GroupCategory.scss';
export const GroupCategory: React.FC<IGroupCategory> = ({ idparent, numCol = 4 }) => {
  const dispatch = useDispatch()
  const {categoryLevelOne,categoryLevelTwo} = useSelector((state: RootState) => state.categorySlice);
  
  useEffect(() => {
    dispatch( getCategoryProductByIDParentLevelOne({ idparent: idparent }));
  }, [idparent]);
  // handleCategoryLevelTwo(idparent)
  return (
    <div className="group-category">
      <div className={`group-category__detail group-category__detail--${numCol}col`}>
        {categoryLevelOne.data &&
          categoryLevelOne.data.map((item:any, i:number) => {
            return <ListCategory key={i} title={item.Name} idparent={item.IDCategory} keymap={i}/>;
          })}
      </div>
    </div>
  );
};
