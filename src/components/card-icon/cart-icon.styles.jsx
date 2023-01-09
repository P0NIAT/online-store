import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 36px;
  height: 36px;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  bottom: 16px;
`
