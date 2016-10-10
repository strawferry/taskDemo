


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


import DropDown from './lib';
const {
    Select,
    Option,
    OptionList,
    updatePosition
} = DropDown;

const hx = ['平层户型', '跃层户型', '错层户型', '复式户型'];

const fx = ['一室一厅', '二室一厅二卫', '二室二厅二卫', '三室一厅', '三室二厅二卫'];

const xx = ['北京大学', '清华大学', '北京理工大学', '人民大学'];

export  default class Task extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hx: '',
            fx: '',
            xx: '',
            area: '',
            large: '',
            wechat: ''
        };
    }
    componentDidMount() {
        updatePosition(this.refs['hx']);
        updatePosition(this.refs['OLhx']);
        updatePosition(this.refs['fx']);
        updatePosition(this.refs['OLfx']);
        updatePosition(this.refs['xx']);
        updatePosition(this.refs['OLxx']);

    }
    _hxList() {
        return this.refs['OLhx'];
    }

    _fxList() {
        return this.refs['OLfx'];
    }

    _xxList() {
        return this.refs['OLxx'];
    }

    _hx(e) {
        this.setState({hx: e});
    }

    _fx(e) {
        this.setState({fx: e});
    }

    _xx(e) {
        this.setState({xx: e});
    }

    _submit = ()=> {
        const { subActions } = this.props;
        subActions.performSubmitAction(this.state.hx, this.state.fx, this.state.xx, this.state.area, this.state.large, this.state.wechat);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{marginRight: 10, fontSize: 15}}>户型:</Text>
                    <Select
                        width={250}
                        ref="hx"
                        optionListRef={this._hxList.bind(this)}
                        defaultValue="选择你的户型"
                        onSelect={this._hx.bind(this)}>
                        {hx.map((item, i, items)=><Option key={i}>{item}</Option>)}
                    </Select>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{marginRight: 10, fontSize: 15}}>房型:</Text>
                    <Select
                        width={250}
                        ref="fx"
                        optionListRef={this._fxList.bind(this)}
                        defaultValue="选择你的房型"
                        onSelect={this._fx.bind(this)}>
                        {fx.map((item, i, items)=><Option key={i}>{item}</Option>)}
                    </Select>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{marginRight: 10, fontSize: 15}}>学校:</Text>
                    <Select
                        width={250}
                        ref="xx"
                        optionListRef={this._xxList.bind(this)}
                        defaultValue="选择你附近的学校"
                        onSelect={this._xx.bind(this)}>
                        {xx.map((item, i, items)=><Option key={i}>{item}</Option>)}
                    </Select>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 15, marginHorizontal: 20}}>区(选填):</Text>
                    <TextInput
                        keyboardType="default"
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, marginRight: 20}}
                        onChangeText={(text) => this.setState({area: text})}
                        value={this.state.area}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 15, marginHorizontal: 20}}>最高租金:</Text>
                    <TextInput
                        keyboardType="numeric"
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, marginRight: 20}}
                        onChangeText={(text) => this.setState({large: text})}
                        value={this.state.large}
                    />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontSize: 15, marginHorizontal: 20}}>微信:</Text>
                    <TextInput
                        keyboardType="default"
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, marginRight: 20}}
                        onChangeText={(text) => this.setState({wechat: text})}
                        value={this.state.wechat}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        width: 250,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 50,
                        marginTop: 20
                    }}
                    onPress={this._submit.bind(this)}>
                    <Text>提交保存</Text>
                </TouchableOpacity>
                <OptionList ref="OLhx"/>
                <OptionList ref="OLfx"/>
                <OptionList ref="OLxx"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});