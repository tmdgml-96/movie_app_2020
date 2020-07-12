import React from 'react';

class Detail extends React.Component {
    componentDidMount() { // 컴포넌트가 마운트되면
        const { location, history } = this.props; // 구조 분해 할당으로 데이터를 얻고,

        if (location.state === undefined) {
            history.push('/'); //다시 Home으로 이동시킴
        }
    }

    render() {
        const { location } = this.props;

        // location 없으면 null 반환.
        if (location.state) {


            return <span>{location.state.title}</span>
        }
        else {
            return null;
        }
    }
}

export default Detail;