/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../common/assets/logo.png'
import paths from '../../common/constants/paths'
import {
  Container,
  ContainerItems,
  ContainerMenu,
  Icons,
  MenuHeader,
  PageLink
} from './style'

export function HeaderPublic () {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <img  style={{ paddingLeft: "10%"}} src={Logo} />
        <ContainerItems>
          <PageLink onClick={() => navigate(paths.Login)}>Entrar</PageLink>
          <PageLink onClick={() => navigate(paths.Register)}>
            Cadastra-se
          </PageLink>
        </ContainerItems>
      </Container>

      <ContainerMenu>
  
        <MenuHeader>
          <Icons>
            <PageLink onClick={() => navigate(paths.Login)}>Entrar</PageLink>
          </Icons>
          <Icons>
            <PageLink onClick={() => navigate(paths.Register)}>
              Cadastra-se
            </PageLink>
          </Icons>
        </MenuHeader>
      </ContainerMenu>
    </>
  );
}
