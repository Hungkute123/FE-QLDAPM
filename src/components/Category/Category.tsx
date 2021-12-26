import React, { useEffect, useState } from 'react';
import './Category.scss';
import { GroupCategory } from './GroupCategory/GroupCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { doGetCategoryProductByIDParentWithSetLimit, getCategoryProductByLevelZero, resetCategoryLevelTwo } from '../../redux/slice/appSlice/categorySlice';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

export const Category:React.FC<ICategory> = ({className}) => {
  const [isShown, setIsShown] = useState(false);
  const [idParent, setIDParent] = useState(1);
  const { categoryLevelZero } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(doGetCategoryProductByIDParentWithSetLimit({ idparent: 0, limit: 9 }));
  }, [dispatch]);
  return (
    <div
      className="category"
      onMouseLeave={() => {
        setIsShown(false);
        setIDParent(0);
        dispatch(resetCategoryLevelTwo());
      }}>
      Danh Mục Sản Phẩm
      <ul className={`category__dropdown ${className}`}>
        {categoryLevelZero.data &&
          categoryLevelZero.data.map((item: any, i: number) => {
            return (
              <li
                key={i}
                onMouseEnter={() => {
                  setIsShown(true);
                  setIDParent(Number(item.IDCategory));
                  dispatch(resetCategoryLevelTwo());
                }}>
                <Link to={`/catalogsearch/result?text=${item.Name}`}>
                  {item.Name}
                  <b className="caret"></b>
                </Link>
              </li>
            );
          })}
        {isShown && <LazyLoad><GroupCategory idparent={idParent} key={idParent}/></LazyLoad>}
      </ul>
    </div>
  );
};
