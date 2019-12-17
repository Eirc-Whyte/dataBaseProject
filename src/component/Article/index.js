import React from "react"
import { message,Typography } from "antd"
import api from "../../api"
const { Title, Paragraph,Button } = Typography;
class Article extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.id,
            content:'',
            title:'',
            type:'',
            endTime:'',
            creator:'',
            fileList:[],
            uploadDetail:[],
        }
    }
    componentDidMount(){
        const url = api.host+api.actDetail+"?actId="+this.state.id;
        fetch(url,{
            headers:new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'GET', // or 'PUT'
        }).then(
            res => {
                res.json().then(data=>{
                    console.log(this.state.uploadDetail);
                    this.setState({
                        
                        content:data.obj.article,
                        title:data.obj.Title,
                        type:data.obj.Type,
                        endTime:data.obj.EndTime,
                        creator:data.obj.Creator,
                        fileList:data.obj.file,
                        uploadDetail:data.obj.upload,
                    });
                })
            }
        ).catch(
            err=>{
                message.warning("网络连接异常，信息获取失败！");
            }
        )
    }
    // state = {
    //     title:"this is a title",
    //     content:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam elit, quis mattis eros scelerisque vitae. Donec id erat et erat consequat aliquam eget ac velit. Integer efficitur purus quam, a convallis mauris ultricies at. Donec tellus nisi, congue ut ante dapibus, accumsan iaculis felis. Donec suscipit, felis at vulputate feugiat, mauris elit ullamcorper augue, tempor bibendum quam quam sed lacus. Cras interdum orci non mi accumsan dictum. Nunc accumsan est at lorem pretium dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis interdum tellus non tempus. Aenean fermentum sodales odio, et bibendum ante imperdiet quis. Etiam volutpat hendrerit lobortis. Phasellus accumsan, nulla scelerisque condimentum suscipit, nulla sapien dapibus sapien, eget ultricies dolor magna nec ligula. Pellentesque cursus, risus sit amet vulputate sagittis, sapien ante scelerisque justo, in elementum ligula metus non nulla. Nunc sit amet eleifend elit, id facilisis odio. In at ornare elit. Curabitur vel libero consectetur tortor ultrices pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt diam elit, quis mattis eros scelerisque vitae. Donec id erat et erat consequat aliquam eget ac velit. Integer efficitur purus quam, a convallis mauris ultricies at. Donec tellus nisi, congue ut ante dapibus, accumsan iaculis felis. Donec suscipit, felis at vulputate feugiat, mauris elit ullamcorper augue, tempor bibendum quam quam sed lacus. Cras interdum orci non mi accumsan dictum. Nunc accumsan est at lorem pretium dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis interdum tellus non tempus. Aenean fermentum sodales odio, et bibendum ante imperdiet quis. Etiam volutpat hendrerit lobortis. Phasellus accumsan, nulla scelerisque condimentum suscipit, nulla sapien dapibus sapien, eget ultricies dolor magna nec ligula. Pellentesque cursus, risus sit amet vulputate sagittis, sapien ante scelerisque justo, in elementum ligula metus non nulla. Nunc sit amet eleifend elit, id facilisis odio. In at ornare elit. Curabitur vel libero consectetur tortor ultrices pellentesque.",
    //   };
    render() {
        return (
            <Typography style={{ background: '#fff', padding: 24, minHeight:400 }}>
                <Title>
                    {this.state.title}
                </Title>
                <Paragraph>
                    {this.state.content}
                </Paragraph>
            </Typography>
        );
    }
}
export default Article;