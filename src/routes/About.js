import React from 'react';
import AboutImg from '../images/about_s.jpg';
import './About.css';



function About() {

    return (
    
        <div className='about__container'>
             <h2>🎄About🎄</h2>

            <div className='about__img'>
                <img src={AboutImg} alt="핀과 제이크 이미지" title = "제가 좋아하는 핀과 제이크입니다☘"></img>
            </div>

            <p>안녕하세요.</p>
            <p>반갑습니다😊</p>

            <span>처음으로 웹에 흥미를 느껴</span><br/>
            <span>스스로 찾아 구현해본 서비스입니다.</span><br/>
            <span>앞으로도 꾸준히 보완 + 수정할 예정입니다.</span>

            <p>'React'를 사용했습니다..</p>
            <span>참고한 책은『클론코딩 영화 평점 웹 서비스』입니다.</span><br/>
            <br/><br/>
            <span>🐷Create by 박승희</span><br/>
            <span>📕With 노마드 코더</span><br/>
            <br/><br/>

        </div>
    );
}

export default About;