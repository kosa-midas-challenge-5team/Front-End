import React from "react";
import styled from "styled-components";
import MenuBar from "../menu";
import StartBar from "../start";

const UserHomeWorking = () => {
  return (
    <Wrapper>
      <MenuBar />
      <MainWrapper>
        <HeaderWrapper>
          <p>재택근무 보고서 작성</p>
        </HeaderWrapper>
        <hr />
        <DescriptionDiv>
          <DateWrapper>
            <p>신청 날짜</p>
            <div className="dateDiv">
              <p>2022 / 11 / 04</p>
            </div>
          </DateWrapper>
          <div className="aplliDiv">
            <p id="description">재택근무를 신청하시겠어요?</p>
            <p id="application">재택근무 신청하기</p>
          </div>
        </DescriptionDiv>
        <ContentArea placeholder="내용" />
        <BtnWrapper>
          <button>제출하기</button>
        </BtnWrapper>
      </MainWrapper>
      <StartBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MainWrapper = styled.div`
  margin-top: 160px;
  > hr {
    margin: 0 0 60px 0;
  }
`;

const HeaderWrapper = styled.div`
  width: 780px;
  display: flex;
  justify-content: space-between;

  > p {
    margin: 0 0 10px 0;
    font-size: 30px;
  }
`;

const DateWrapper = styled.div`
  width: 300px;
  height: 50px;
  padding: 5px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f4f9;
  > p {
    margin-left: 20px;
  }
  .dateDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 30px;
    background-color: white;
    margin-right: 20px;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .aplliDiv {
    display: flex;
    #description {
      margin-right: 5px;
      color: #707070;
    }
    #application {
      color: #6077c7;
      text-decoration: underline;
    }
  }
`;

const ContentArea = styled.textarea`
  width: 780px;
  height: 300px;
  padding: 10px;
  margin-top: 30px;
  border-radius: 15px;
  border: none;
  resize: none;
  background-color: #f0f4f9;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    width: 200px;
    height: 52px;
    margin-top: 30px;
    color: white;
    background-color: #0051cb;
    border: none;
    border-radius: 15px;
    outline: none;
  }
`;

export default UserHomeWorking;
