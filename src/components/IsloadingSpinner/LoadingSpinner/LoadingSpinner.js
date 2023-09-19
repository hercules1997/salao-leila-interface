import styled from 'styled-components'
export const Spinner = styled.div`
  width: 120px;
  height: 20px;
  color: beige;

  gap: 5px;
  div {
  width: 18px;
  height: 18px;

  background-color: pink;
  border-radius: 7px;
  display: inline-block;
  animation: bounce 1s infinite ease-in-out both;
}

.bounce1 {
  animation-delay: -0.42s;
}
.bounce2 {
  animation-delay: -0.32s;
}
.bounce3 {
  animation-delay: -0.22s;
}
.bounce4 {
  animation-delay: -0.12s;
}
`

export const LoadingSpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  width: 100vw;
  position: fixed;
  z-index: 11;
  backdrop-filter: blur(10px);
  background-color: #704b34cf;
  flex-direction: column;

  font-size: 20px;

  span {
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
  }

  img {
    width: 60%;
    margin-bottom: 10px;
  }

  @keyframes bounce {
    0%,
    60%,
    80%,
    100% {
      transform: scale(0);
    }
    30% {
      transform: scale(1);
    }
  }
`;
