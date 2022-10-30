import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 90px;
  margin-inline: 3rem;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    margin-inline: 0;
  }
`;
