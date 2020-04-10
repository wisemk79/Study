import React, {useState, useEffect} from 'react'
import Login from '../components/Login'
import {setId, login, logout, getAxiosAction, postAxiosAction} from '../action'
import {connect} from 'react-redux'

function LoginPage(props) {
    const [datas, setDatas] = useState(null)

    useEffect(() => {
        if(!datas){
            setDatas(
                {
                    id: props.id,
                    isLogged: props.isLogged,
                    list: props.list,
                    session: props.session
                }
            )
        }else if(datas.id !== props.id || datas.list !== props.list){
            setDatas(
                {
                    id: props.id,
                    isLogged: props.isLogged,
                    list: props.list,
                    session: props.session
                }
            )
        }
    })

    const idChange = (event) => { 
        props.onUpdateId(event.target.value); 
    } 

    return (
        <div>
            {datas && 
            <Login 
                datas={datas} 
                idChange={idChange} 
                login_evt={props.loginId} 
                logout_evt={props.logoutId}
                getAxiosAction={props.getAxiosAction}
                postAxiosAction={props.postAxiosAction}
            />}
        </div>
    )
}


//reducer에 있는 state를 가져오는데, reducer의 logger함수에서 반환한다.
const mapStateToProps = (state) => {
    return {
        id: state.logger.id,
        isLogged: state.logger.isLogged,
        list:state.logger.list,
        session:state.logger.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateId: (value)=>dispatch(setId(value)),
        loginId: ()=>dispatch(login()),
        logoutId: ()=>dispatch(logout()),
        getAxiosAction: ()=>dispatch(getAxiosAction()),
        postAxiosAction: ()=>dispatch(postAxiosAction())
    }
}

//LoginPage를 store와 연결한다.
LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default LoginPage

