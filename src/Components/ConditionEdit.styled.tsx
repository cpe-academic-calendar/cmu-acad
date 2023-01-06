import styled from 'styled-components'

export const ConditionHead = styled.div`
    background-color: #F57F17;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: var(--primary-color);
    color: #fff;
`
export const ConditionForm = styled.form`
    padding: 16px;
`

export const ConditionLayout = styled.div`
    border: 1px;
    background: #FCFCFC;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 400px;
`

export const ConditionComponent = styled.div`
    padding:16px;
`

export const CheckmarkRadio = styled.input`
    width: 25px;
    height: 25px;
    border: 4px solid black;
`

export const CreateEvent = styled.button`
    padding: 5px 42px 5px 42px;
    display: flex;
    align-items: center;
    background-color: #F57F17;
    color: white;
`

export const EventName = styled.input`
    width: 100;
`