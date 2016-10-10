import * as types from './types';


export function performSubmitAction(hx,fx,xx,area,large,wechat){
    return dispatch => {
        dispatch(onSubmitAction());
        if (hx) {
            if (fx) {
                if (xx) {
                    if (large) {
                        if (wechat) {
                            alert(`户型:${hx}-房型:${fx}-附件学校:${xx}-区:${area}-最高租金:${large}-微信号:${wechat}`);
                            dispatch(receiveSubmitAction(`户型:${hx}-房型:${fx}-附件学校:${xx}-区:${area}-最高租金:${large}-微信号:${wechat}`));
                        } else {
                            alert('请填写你的微信号');
                            dispatch(receiveSubmitAction('请填写你的微信号'));
                        }
                    } else {
                        alert('请填写最高租金');
                        dispatch(receiveSubmitAction('请填写最高租金'));
                    }
                } else {
                    alert('请选择附件的学校');
                    dispatch(receiveSubmitAction('请选择附件的学校'));
                }
            } else {
                alert('请选择相应的房型');
                dispatch(receiveSubmitAction('请选择相应的房型'));
            }
        } else {
            alert('请选择相应的户型');
            dispatch(receiveSubmitAction('请选择相应的户型'));
        }

    }
}




export function onSubmitAction() {
    return {
        type: types.ON_SUBMIT
    };
}

export function receiveSubmitAction(result) {
    return {
        type: types.RECEIVE_SUBMIT,
        result: result
    };
}