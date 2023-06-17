import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const StyledImg = styled('img')`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  z-index: 2;
`
export const StyledOL = styled('ol')`
  display: inline-block;
  padding-left: 0;
  overflow: hidden;
  width: 100%;
  margin: 0;
`

export const StyledLI = styled('li')`
  display: inline-block;
  &:first-of-type{
    margin-left: 15px !important;
  }
  @media only screen and (max-width: 900px) {
    &:first-of-type{
      margin-left: 5px !important;
    }
    margin-left: 5px !important;
  }
`

export const StyledDiv = styled('div')`
  width: calc(33vw - 15px);
  list-style-type: none;
  margin: 0 5px;
  height: calc(100vh - 80px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  @media only screen and (max-width: 900px) {
    width: calc(100vw - 20px);
    height: calc(33vh - 27px);
  }
`