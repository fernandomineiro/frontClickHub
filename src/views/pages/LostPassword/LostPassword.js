import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
const LostPassword = () =>{
    return (
        <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={6}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h3>Renvidicar senha</h3>
                      <p className="text-body-secondary">Digite seu email</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput placeholder="Email" autoComplete="Email" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>

                          <CButton color="primary" style={{background: 'black', border: 'none'}} className="px-4">
                            Enviar
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                        <Link to="/login">
                          <CButton color="link" style={{ fontWeight: 700, color: 'white', fontSize: '12pt'}} className="px-0">
                            Voltar
                          </CButton>
                          </Link>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
        

    )
}

export default LostPassword