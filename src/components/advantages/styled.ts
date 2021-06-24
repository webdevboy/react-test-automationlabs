import styled from "styled-components";

export const AdvantagesStyled = styled.div``;

export const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 95px;
  padding: 65px 170px 33px 170px;
  text-align: center;
`;

export const AdvantageItemImg = styled.div`
  height: 60px;
  img {
    height: 100%;
  }
`;

export const AdvantageItemTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.1;
`;

export const AdvantageItemDescription = styled.div`
  color: #606060;
  font-size: 14px;
  line-height: 1.1;
`;
