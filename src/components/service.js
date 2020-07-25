import React, { Component } from 'react';
import { Table, DataTable, TableHeader, Textfield} from 'react-mdl';
import Select from 'react-select';
import { ReactComponent as Star } from './star.svg';
import axios from 'axios';
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
import ReactTable from "react-table";
import "react-table/react-table.css";


const gu = [
  { label: "종로구", value: "종로구" },
  { label: "중구", value: "중구" },
  { label: "용산구", value: "용산구" },
  { label: "성동구", value: "성동구" },
  { label: "광진구", value: "광진구" },
  { label: "동대문구", value: "동대문구" },
  { label: "중랑구", value: "중랑구" },
  { label: "성북구", value: "성북구" },
  { label: "강북구", value: "강북구" },
  { label: "도봉구", value: "도봉구" },
  { label: "노원구", value: "노원구" },
  { label: "은평구", value: "은평구" },
  { label: "서대문구", value: "서대문구" },
  { label: "마포구", value: "마포구" },
  { label: "강서구", value: "강서구" },
  { label: "구로구", value: "구로구" },
  { label: "금천구", value: "금천구" },
  { label: "영등포구", value: "영등포구" },
  { label: "동작구", value: "동작구" },
  { label: "관악구", value: "관악구"},
  { label: "서초구", value: "서초구" },
  { label: "강남구", value: "강남구" },
  { label: "송파구", value: "송파구" },
  { label: "강동구", value: "강동구" },
];

// 종로구
const dong1 = [
  { label: "청운동", value: "청운동" },
  { label: "신교동", value: "신교동" },
  { label: "궁정동", value: "궁정동" },
  { label: "효자동", value: "효자동" },
  { label: "창성동", value: "창성동" },
  { label: "통의동", value: "통의동" },
  { label: "적선동", value: "적선동" },
  { label: "통인동", value: "통인동" },
  { label: "누상동", value: "누상동" },
  { label: "누하동", value: "누하동" },
  { label: "옥인동", value: "옥인동" },
  { label: "체부동", value: "체부동" },
  { label: "필운동", value: "필운동" },
  { label: "내자동", value: "내자동" },
  { label: "사직동", value: "사직동" },
  { label: "도렴동", value: "도렴동" },
  { label: "당주동", value: "당주동" },
  { label: "내수동", value: "내수동" },
  { label: "세종로", value: "세종로" },
  { label: "신문로1가", value: "신문로1가" },
  { label: "신문로2가", value: "신문로2가" },
  { label: "청진동", value: "청진동" },
  { label: "서린동", value: "서린동" },
  { label: "수송동", value: "수송동" },
  { label: "중학동", value: "중학동" },
  { label: "종로1가", value: "종로1가" },
  { label: "공평동", value: "공평동" },
  { label: "관훈동", value: "관훈동" },
  { label: "견지동", value: "견지동" },
  { label: "와룡동", value: "와룡동" },
  { label: "권농동", value: "권농동" },
  { label: "운니동", value: "운니동" },
  { label: "익선동", value: "익선동" },
  { label: "경운동", value: "경운동" },
  { label: "관철동", value: "관철동" },
  { label: "인사동", value: "인사동" },
  { label: "낙원동", value: "낙원동" },
  { label: "종로2가", value: "종로2가" },
  { label: "팔판동", value: "팔판동" },
  { label: "삼청동", value: "삼청동" },
  { label: "안국동", value: "안국동" },
  { label: "소격동", value: "소격동" },
  { label: "화동", value: "화동" },
  { label: "시간동", value: "시간동"},
  { label: "송현동", value: "송현동" },
  { label: "가희동", value: "가희동" },
  { label: "재동", value: "재동" },
  { label: "계동", value: "계동" },
  { label: "원서동", value: "원서동" },
  { label: "훈정동", value: "훈정동" },
  { label: "묘동", value: "묘동" },
  { label: "봉익동", value: "봉익동" },
  { label: "돈의동", value: "돈의동" },
  { label: "장사동", value: "장사동" },
  { label: "관수동", value: "관수동" },
  { label: "종로3가", value: "종로3가" },
  { label: "인의동", value: "인의동" },
  { label: "예지동", value: "예지동" },
  { label: "원남동", value: "원남동" },
  { label: "연지동", value: "연지동" },
  { label: "종로4가", value: "종로4가" },
  { label: "효제동", value: "효제동"},
  { label: "종로5가", value: "종로5가" },
  { label: "종로6가", value: "종로6가" },
  { label: "이화동", value: "이화동" },
  { label: "연건동", value: "연견동" },
  { label: "충신동", value: "충신동" },
  { label: "동승동", value: "동승동" },
  { label: "혜화동", value: "혜화동" },
  { label: "명륜1가", value: "명륜1가" },
  { label: "명륜2가", value: "명륜2가" },
  { label: "명륜4가", value: "명륜4가" },
  { label: "명륜3가", value: "명륜3가" },
  { label: "창신동", value: "창신동" },
  { label: "승인동", value: "승인동" },
  { label: "교남동", value: "교남동" },
  { label: "평동", value: "평동" },
  { label: "송월동", value: "송월동" },
  { label: "홍파동", value: "홍파동" },
  { label: "교북동", value: "교북동" },
  { label: "행촌동", value: "행촌동" },
  { label: "구기동", value: "구기동" },
  { label: "평창동", value: "평창동" },
  { label: "부암동", value: "부암동" },
  { label: "홍지동", value: "홍지동" },
  { label: "신영동", value: "신영동" },
  { label: "무악동", value: "무악동" },
]

// 중구
const dong2 = [
  { label: "무교동", value: "무교동" },
  { label: "다동", value: "다동" },
  { label: "태평로1가", value: "태평로1가" },
  { label: "을지로1가", value: "을지로1가" },
  { label: "을지로2가", value: "을지로2가" },
  { label: "남대문로1가", value: "남대문1가" },
  { label: "삼각동", value: "삼각동" },
  { label: "수하동", value: "수하동" },
  { label: "장교동", value: "장교동" },
  { label: "수표동", value: "수표동" },
  { label: "소공동", value: "소공동" },
  { label: "남창동", value: "남창동" },
  { label: "북창동", value: "북창동" },
  { label: "태평로2가", value: "태ㅠㅕㅇ로2가" },
  { label: "남대문로2가", value: "남대문로2가" },
  { label: "남대문로3가", value: "남대문로3가" },
  { label: "남대문로4가", value: "남대문로4가" },
  { label: "남대문로5가", value: "남대문로5가" },
  { label: "봉래동1가", value: "봉래동1가" },
  { label: "봉래동2가", value: "봉래동2가" },
  { label: "회현동1가", value: "회현동2가" },
  { label: "회현동2가", value: "회현동2가" },
  { label: "회현동3가", value: "회현동3가" },
  { label: "충무로1가", value: "충무로1가" },
  { label: "충무로2가", value: "충무로2가" },
  { label: "명동1가", value: "명동1가" },
  { label: "명동2가", value: "명동2가" },
  { label: "남산동1가", value: "남산동1가" },
  { label: "남산동2가", value: "남산동2가" },
  { label: "남산동3가", value: "남산동3가" },
  { label: "저동1가", value: "저동1가" },
  { label: "충무로4가", value: "충무로4가" },
  { label: "인현동2가", value: "인현동2가" },
  { label: "예관동", value: "예관동" },
  { label: "묵정동", value: "묵정동" },
  { label: "필동1가", value: "필동1가" },
  { label: "필동2가", value: "필동2가" },
  { label: "필동3가", value: "필동3가" },
  { label: "남학동", value: "남학동" },
  { label: "주자동", value: "주자동" },
  { label: "예장동", value: "예자동" },
  { label: "광희동1가", value: "광희동1가" },
  { label: "광희동2가", value: "광희동2가" },
  { label: "쌍림동", value: "쌍림동" },
  { label: "을지로6가", value: "을지로6가" },
  { label: "을지로7가", value: "을지로7가" },
  { label: "을지로4가", value: "을지로4가" },
  { label: "을지로5가", value: "을지로5가" },
  { label: "주교동", value: "주교동" },
  { label: "방산동", value: "방산동" },
  { label: "오장동", value: "오장동" },
  { label: "을지로3가", value: "을지로3가" },
  { label: "입정동", value: "입정동" },
  { label: "산림동", value: "산림동" },
  { label: "충무로3가", value: "충무로3가" },
  { label: "초동", value: "초동" },
  { label: "인현동1가", value: "인현동1가" },
  { label: "저동2가", value: "저동2가" },
  { label: "신당동", value: "신당동" },
  { label: "흥인동", value: "흥인동" },
  { label: "무학동", value: "무학동" },
  { label: "황학동", value: "황학동" },
  { label: "서소문동", value: "서소문동" },
  { label: "정동", value: "정동" },
  { label: "순화동", value: "순화동" },
  { label: "의주로1가", value: "의주로1가" },
  { label: "충정로1가", value: "충정로1가" },
  { label: "중림동", value: "중림동" },
  { label: "의주로2가", value: "의주로2가" },
  { label: "만리동1가", value: "만리동1가" },
  { label: "만리동2가", value: "만리동2가" },
]

// 용산구
const dong3 = [
  { label: "후암동", value: "후암동" },
  { label: "용산동2가", value: "용산동2가" },
  { label: "용산동4가", value: "용산동4가" },
  { label: "갈월동", value: "갈월동" },
  { label: "남영동", value: "남영동" },
  { label: "용산동1가", value: "용산동1가" },
  { label: "동자동", value: "동자동" },
  { label: "서계동", value: "서계동" },
  { label: "청파동1가", value: "청파동1가" },
  { label: "청파동2가", value: "청파동2가" },
  { label: "청파동3가", value: "청파동3가" },
  { label: "원효로1가", value: "원효로1가" },
  { label: "원효로2가", value: "원효로2가" },
  { label: "신창동", value: "신창동" },
  { label: "산천동", value: "산천동" },
  { label: "청암동", value: "청암동" },
  { label: "원효로3가", value: "원효로3가" },
  { label: "원효로4가", value: "원효로4가" },
  { label: "효창동", value: "효창동" },
  { label: "도원동", value: "도원동" },
  { label: "용문동", value: "용문동" },
  { label: "문배동", value: "문배동" },
  { label: "신계동", value: "신계동" },
  { label: "한강로1가", value: "한강로1가" },
  { label: "한강로2가", value: "한강로2가" },
  { label: "용산동3가", value: "용산동3가" },
  { label: "용산동5가", value: "용산동5가" },
  { label: "한강로3가", value: "한강로3가" },
  { label: "이촌동", value: "이촌동" },
  { label: "이태원동", value: "이태원동" },
  { label: "한남동", value: "한남동" },
  { label: "동빙고동", value: "동빙고동" },
  { label: "서빙고동", value: "서빙고동" },
  { label: "주성동", value: "주성동" },
  { label: "용산동6가", value: "용산동6가" },
  { label: "보광동", value: "보광동" },
]

// 성동구
const dong4 = [
  { label: "상왕십리동", value: "상왕십리동" },
  { label: "하왕십리동", value: "하왕십리동" },
  { label: "홍익동", value: "홍익동" },
  { label: "도선동", value: "도선동" },
  { label: "마장동", value: "마장동" },
  { label: "사근동", value: "사근동" },
  { label: "행당동", value: "행당동" },
  { label: "응봉동", value: "응봉동" },
  { label: "금호동1가", value: "금호동1가" },
  { label: "금호동2가", value: "금호동2가" },
  { label: "금호동3가", value: "금호동3가" },
  { label: "금호동4가", value: "금호동4가" },
  { label: "옥수동", value: "옥수동" },
  { label: "성수동1가", value: "성수동1가" },
  { label: "성수동2가", value: "성수동2가" },
  { label: "송정동", value: "송정동" },
  { label: "용답동", value: "용답동" },
]

// 광진구
const dong5 = [
  { label: "중곡동", value: "중곡동" },
  { label: "능동", value: "능동" },
  { label: "구의동", value: "구의동" },
  { label: "광장동", value: "광장동" },
  { label: "자양동", value: "자양동" },
  { label: "화양동", value: "화양동" },
  { label: "군자동", value: "군자동" },
]

// 동대문구
const dong6 = [
  { label: "신설동", value: "신설동" },
  { label: "용두동", value: "용두동" },
  { label: "제기동", value: "제기동" },
  { label: "전농동", value: "전농동" },
  { label: "답십리동", value: "답십리동" },
  { label: "장안동", value: "장안동" },
  { label: "청량리동", value: "청량리동" },
  { label: "회기동", value: "회기동" },
  { label: "휘경동", value: "휘경동" },
  { label: "이문동", value: "이문동" },
]

// 중랑구
const dong7 = [
  { label: "면목동", value: "면목동" },
  { label: "상봉동", value: "상봉동" },
  { label: "중화동", value: "중화동" },
  { label: "묵동", value: "묵동" },
  { label: "망우동", value: "망우동" },
  { label: "신내동", value: "신내동" },
]

// 성북구
const dong8 = [
  { label: "성북동", value: "성북동" },
  { label: "성북동1가", value: "성북동1가" },
  { label: "돈암동", value: "돈암동" },
  { label: "동소문동1가", value: "동소문동1가" },
  { label: "동소문동2가", value: "동소문동2가" },
  { label: "동소문동3가", value: "동소문동3가" },
  { label: "동소문동4가", value: "동소문동4가" },
  { label: "동소문동5가", value: "동소문동5가" },
  { label: "동소문동6가", value: "동소문동6가" },
  { label: "동소문동7가", value: "동소문동7가" },
  { label: "삼선동1가", value: "삼선동1가" },
  { label: "삼선동2가", value: "삼선동2가" },
  { label: "삼선동3가", value: "삼선동3가" },
  { label: "삼선동4가", value: "삼선동4가" },
  { label: "삼성동5가", value: "삼선동5가" },
  { label: "동선동1가", value: "동선동1가" },
  { label: "동선동2가", value: "동선동2가" },
  { label: "동선동3가", value: "동선동3가" },
  { label: "동선동4가", value: "동선동4가" },
  { label: "동선동5가", value: "동선동5가" },
  { label: "안암동1가", value: "안암동1가" },
  { label: "안암동2가", value: "안암동2가" },
  { label: "안암동3가", value: "안암동3가" },
  { label: "안암동4가", value: "안암동4가" },
  { label: "안암동5가", value: "안암동5가" },
  { label: "보문동4가", value: "보문동4가" },
  { label: "보문동5가", value: "보문동5가" },
  { label: "보문동6가", value: "보문동6가" },
  { label: "보문동7가", value: "보문동7가" },
  { label: "보문동1가", value: "보문동1가" },
  { label: "보문동2가", value: "보문동2가" },
  { label: "보문동3가", value: "보문동3가" },
  { label: "정릉동", value: "정릉동" },
  { label: "길음동", value: "길음동" },
  { label: "종암동", value: "종암동" },
  { label: "하월곡동", value: "하월곡동" },
  { label: "상월곡동", value: "상월곡동" },
  { label: "장위동", value: "장위동" },
  { label: "석관동", value: "석관동" },
]

// 강북구
const dong9 = [
  { label: "미아동", value: "미아동" },
  { label: "번동", value: "번동" },
  { label: "수유동", value: "수유동" },
  { label: "우이동", value: "우이동" },
]

// 도봉구
const dong10 = [
  { label: "쌍문동", value: "쌍문동" },
  { label: "방학동", value: "방학동" },
  { label: "창동", value: "창동" },
  { label: "도봉동", value: "도봉동" },
]

// 노원구
const dong11 = [
  { label: "월계동", value: "월계동" },
  { label: "공릉동", value: "공릉동" },
  { label: "하계동", value: "하계동" },
  { label: "상계동", value: "상계동" },
  { label: "중계동", value: "중계동" },
]

// 은평구
const dong12 = [
  { label: "수색동", value: "수색동" },
  { label: "녹번동", value: "놀번동" },
  { label: "불광동", value: "불광동" },
  { label: "갈현동", value: "갈현동" },
  { label: "구산동", value: "구산동" },
  { label: "대조동", value: "대조동" },
  { label: "응암동", value: "응암동" },
  { label: "역촌동", value: "역촌동" },
  { label: "신사동", value: "신사동" },
  { label: "증산동", value: "증산동" },
  { label: "진관동", value: "진관동" },
]

// 서대문구
const dong13 = [
  { label: "충정로2가", value: "충정로2가" },
  { label: "충정로3가", value: "충정로3가" },
  { label: "합동", value: "합동" },
  { label: "미근동", value: "미근동" },
  { label: "냉전동", value: "냉전동" },
  { label: "천연동", value: "천연동" },
  { label: "옥천동", value: "옥천동" },
  { label: "영천동", value: "영천동" },
  { label: "현저동", value: "현저동" },
  { label: "북아현동", value: "북아현동" },
  { label: "홍제동", value: "홍제동" },
  { label: "대현동", value: "대현동" },
  { label: "대신동", value: "대신동" },
  { label: "신촌동", value: "신촌동" },
  { label: "봉원동", value: "봉원동" },
  { label: "창천동", value: "창천동" },
  { label: "연희동", value: "연희동" },
  { label: "홍은동", value: "홍은동" },
  { label: "북가좌동", value: "북가좌동" },
  { label: "남가좌동", value: "남가좌동" },
]

// 마포구
const dong14 = [
  { label: "아현동", value: "아현동" },
  { label: "공덕동", value: "공덕동" },
  { label: "신공덕동", value: "신공덕동" },
  { label: "도화동", value: "도화동" },
  { label: "용강동", value: "용강동" },
  { label: "토정동", value: "토정동" },
  { label: "마포동", value: "마포동" },
  { label: "대흥동", value: "대흥동" },
  { label: "염리동", value: "염리동" },
  { label: "노고산동", value: "노고산동" },
  { label: "신수동", value: "신수동" },
  { label: "현석동", value: "현석동" },
  { label: "구수동", value: "구수동" },
  { label: "창전동", value: "창전동" },
  { label: "상수동", value: "상수동" },
  { label: "하중동", value: "하중동" },
  { label: "신정동", value: "신정동" },
  { label: "당인동", value: "당인동" },
  { label: "서교동", value: "서교동" },
  { label: "동교동", value: "동교동" },
  { label: "합정동", value: "합정동" },
  { label: "망원동", value: "망원동" },
  { label: "연남동", value: "연남동" },
  { label: "성산동", value: "성산동" },
  { label: "중동", value: "중동" },
  { label: "상암동", value: "상암동" },
]

// 양천구
const dong15 = [
  { label: "신정동", value: "신정동" },
  { label: "목동", value: "목동" },
  { label: "신월동", value: "신월동" },
]

// 강서구
const dong16 = [
  { label: "염창동", value: "염창동" },
  { label: "등촌동", value: "등촌동" },
  { label: "화곡동", value: "화곡동" },
  { label: "가양동", value: "가양동" },
  { label: "마곡동", value: "마곡동" },
  { label: "내발산동", value: "내발산동" },
  { label: "외발산동", value: "외발산동" },
  { label: "공항동", value: "공항동" },
  { label: "방화동", value: "방화동" },
  { label: "개화동", value: "개화동" },
  { label: "과해동", value: "과해동" },
  { label: "오곡동", value: "오곡동" },
  { label: "오쇠동", value: "오쇠동" },
]

// 구로구
const dong17 = [
  { label: "신도림동", value: "신도림동" },
  { label: "구로동", value: "구로동" },
  { label: "가리봉동", value: "가리봉동" },
  { label: "고척동", value: "고척동" },
  { label: "개봉동", value: "개복동" },
  { label: "오류동", value: "오류동" },
  { label: "궁동", value: "궁동" },
  { label: "온수동", value: "온수동" },
  { label: "천왕동", value: "천왕동" },
  { label: "항동", value: "항동" },
]

// 금천구
const dong18 = [
  { label: "가산동", value: "가산동" },
  { label: "독산동", value: "독산동" },
  { label: "시흥동", value: "시흥동" },
]

// 영등포구
const dong19 = [
  { label: "영등포동", value: "영등포동" },
  { label: "영등포동1가", value: "영등포동1가" },
  { label: "영등포동2가", value: "영등포동2가" },
  { label: "영등포동3가", value: "영등포동3가" },
  { label: "영등포동4가", value: "영등포동4가" },
  { label: "영등포동5가", value: "영등포동5가" },
  { label: "영등포동6가", value: "영등포동6가" },
  { label: "영등포동7가", value: "영등포동7가" },
  { label: "영등포동8가", value: "영등포동8가" },
  { label: "여의도동", value: "여의도동" },
  { label: "당산동1가", value: "당산동1가" },
  { label: "당산동2가", value: "당산동2가" },
  { label: "당산동3가", value: "당산동3가" },
  { label: "당산동4가", value: "당산동4가" },
  { label: "당산동5가", value: "당산동5가" },
  { label: "당산동6가", value: "당산동6가" },
  { label: "당산동", value: "당산동" },
  { label: "도림동", value: "도림동" },
  { label: "문래동1가", value: "문래동1가" },
  { label: "문래동2가", value: "문래동2가" },
  { label: "문래동3가", value: "문래동3가" },
  { label: "문래동4가", value: "문래동4가" },
  { label: "문래동5가", value: "문래동5가" },
  { label: "문래동6가", value: "문래동6가" },
  { label: "양평동1가", value: "양평동1가" },
  { label: "양평동2가", value: "양평동2가" },
  { label: "양평동3가", value: "양평동3가" },
  { label: "양평동4가", value: "양평동4가" },
  { label: "양평동5가", value: "양평동5가" },
  { label: "양평동6가", value: "양평동6가" },
  { label: "양화동", value: "양화동" },
  { label: "신길동", value: "신길동" },
  { label: "대림동", value: "대림동" },
  { label: "양평동", value: "양평동" },
]

// 동작구
const dong20 = [
  { label: "노량진동", value: "노량진동" },
  { label: "상도동", value: "상도동" },
  { label: "상도1동", value: "상도1동" },
  { label: "본동", value: "본동" },
  { label: "흑석동", value: "흑석동" },
  { label: "동작동", value: "동작동" },
  { label: "사당동", value: "사당동" },
  { label: "대방동", value: "대방동" },
  { label: "신대방동", value: "신대방동" },
]

// 관악구
const dong21 = [
  { label: "봉천동", value: "봉천동" },
  { label: "신림동", value: "신림동" },
  { label: "남현동", value: "남현동" },
]

// 서초구
const dong22 = [
  { label: "방배동", value: "방배동" },
  { label: "양재동", value: "양재동" },
  { label: "우면동", value: "우면동" },
  { label: "원지동", value: "원지동" },
  { label: "잠원동", value: "잠원동" },
  { label: "반포동", value: "반포동" },
  { label: "서초동", value: "서초동" },
  { label: "내곡동", value: "내곡동" },
  { label: "염곡동", value: "염곡동" },
  { label: "신원동", value: "신원동" },
]

// 강남구
const dong23 = [
  { label: "역삼동", value: "역삼동" },
  { label: "개포동", value: "개포동" },
  { label: "청담동", value: "청담동" },
  { label: "삼성동", value: "삼성동" },
  { label: "대치동", value: "대치동" },
  { label: "신사동", value: "신사동" },
  { label: "논현동", value: "논현동" },
  { label: "압구정동", value: "압구정동" },
  { label: "세곡동", value: "세곡동" },
  { label: "자곡동", value: "자곡동" },
  { label: "율현동", value: "율현동" },
  { label: "일원동", value: "일원동" },
  { label: "수서동", value: "수서동" },
  { label: "도곡동", value: "도곡동" },
]
// 송파구
const dong24 = [
  { label: "잠실동", value: "잠실동" },
  { label: "신천동", value: "신천동" },
  { label: "풍납동", value: "풍납동" },
  { label: "송파동", value: "송파동" },
  { label: "석촌동", value: "석촌동" },
  { label: "삼전동", value: "삼전동" },
  { label: "가락동", value: "가락동" },
  { label: "문정동", value: "문정동" },
  { label: "장지동", value: "장지동" },
  { label: "방이동", value: "방이동" },
  { label: "오금동", value: "오금동" },
  { label: "거여동", value: "거여동" },
  { label: "마천동", value: "마천동" },
]
// 강동구
const dong25 = [
  { label: "명일동", value: "명일동" },
  { label: "고덕동", value: "고덕동" },
  { label: "상일동", value: "상일동" },
  { label: "길동", value: "길동" },
  { label: "둔촌동", value: "둔천동" },
  { label: "암사동", value: "암사동" },
  { label: "성내동", value: "성내동" },
  { label: "천호동", value: "천호동" },
  { label: "강일동", value: "강일동" },
]


class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { gu: "", dong: "", which_dong: [], data : [], pages: -1, loading: false};

    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentDidMount() {
    if (this.props.location.token == null) {
      this.props.history.push('/');
    }

    var favorites = document.getElementsByClassName("favorites")[0];
    favorites.style.display = "inline";

    var none1 = document.getElementsByClassName("none")[0];
    var none2 = document.getElementsByClassName("none")[1];
    none1.style.display = "none";
    none2.style.display = "none";
  }



  update_select(value) {
    this.setState({gu: value});
    switch(value) {
      case "종로구":
        this.setState({which_dong: dong1});
        break;
      case "중구":
        this.setState({which_dong: dong2});
        break;
      case "용산구":
        this.setState({which_dong: dong3});
        break;
      case "성동구":
        this.setState({which_dong: dong4});
        break;
      case "광진구":
        this.setState({which_dong: dong5});
        break;
      case "동대문구":
        this.setState({which_dong: dong6});
        break;
      case "중랑구":
        this.setState({which_dong: dong7});
        break;
      case "성북구":
        this.setState({which_dong: dong8});
        break;
      case "강북구":
        this.setState({which_dong: dong9});
        break;
      case "도봉구":
        this.setState({which_dong: dong10});
        break;
      case "노원구":
        this.setState({which_dong: dong11});
        break;
      case "은평구":
        this.setState({which_dong: dong12});
        break;
      case "서대문구":
        this.setState({which_dong: dong13});
        break;
      case "마포구":
        this.setState({which_dong: dong14});
        break;
      case "양천구":
        this.setState({which_dong: dong15});
        break;
      case "강서구":
        this.setState({which_dong: dong16});
        break;
      case "구로구":
        this.setState({which_dong: dong17});
        break;
      case "금천구":
        this.setState({which_dong: dong18});
        break;
      case "영등포구":
        this.setState({which_dong: dong19});
        break;
      case "동작구":
        this.setState({which_dong: dong20});
        break;
      case "관악구":
        this.setState({which_dong: dong21});
        break;
      case "서초구":
        this.setState({which_dong: dong22});
        break;
      case "강남구":
        this.setState({which_dong: dong23});
        break;
      case "송파구":
        this.setState({which_dong: dong24});
        break;
      case "강동구":
        this.setState({which_dong: dong25});
        break;
    }
  }

  getData (gu, dong) {
    this.setState({loading: true});
    axios.post('https://ec2-13-209-26-92.ap-northeast-2.compute.amazonaws.com/api/?gu_dong=' + gu + dong).then((res) => {
      this.setState({ data:res.data});
    })
    this.setState({loading: false});
  }

  like (property) {
    axios.post('https://ec2-13-209-26-92.ap-northeast-2.compute.amazonaws.com/like/?user=' + this.props.location.user_id + '&property=' + property);
    this.setState({
      openDialog: true
    });
  }


  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  };


  render() {
    return(
      <div class="service">
        <div class="search-bar">
          <div class="search-container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Select placeholder="Gu" onChange={e => this.update_select(e.value)} options={ gu } />
              </div>
              <div className="col-md-4">
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Select placeholder="Dong" onChange={e => this.setState({ dong: e.value })}options={ this.state.which_dong } />
              </div>
              <div className="col-md-4"></div>
            </div>
            <button class="search-button" onClick={() => {this.getData(this.state.gu, this.state.dong)}}>Search</button>
          </div>
        </div>
        <h3 class="search-result-msg">Search Results</h3>
        <div class="search-results">
            <ReactTable
            data={this.state.data}
            pages={this.state.pages}
            loading={this.state.loading}
            columns={[
              {
                columns: [
                  {
                    Header: "",
                    accessor: "prop_id",
                    Cell: row => (
                      <div>
                        <Dialog open={this.state.openDialog}>
                          <DialogTitle>Success</DialogTitle>
                          <DialogContent>
                            <p>SUCCESS</p>
                          </DialogContent>
                          <DialogActions>
                            <Button type='button' onClick={this.handleCloseDialog}>OK</Button>
                          </DialogActions>
                        </Dialog>
                        <div style={{textAlign:"center"}}>
                          <button class="search-button like-button" onClick={() => {this.like(row.value)}}>LIKE</button>
                        </div>
                      </div>
                    )
                  },
                  {
                    Header: "Address",
                    accessor: "gu_dong",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Name",
                    accessor: "name",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Common Area",
                    accessor: "spc1",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Exclusive Use Area",
                    accessor: "spc2",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Level",
                    accessor: "flr",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Story",
                    accessor: "flr_total",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Price",
                    accessor: "price",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Exp Price",
                    accessor: "exp_price",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        {row.value}
                      </div>
                    )
                  },
                  {
                    Header: "Learn More",
                    accessor: "url",
                    Cell: row => (
                      <div style={{textAlign:"center"}}>
                        <a href= {row.value}> Click </a>
                      </div>
                    )
                  }
                ]
              },
            ]}
            defaultSorted={[
              {
                id: "Prop_id",
                desc: true
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        </div>
      </div>
    )
  }
}


export default Service;
