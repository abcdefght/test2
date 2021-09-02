// Third party.
import {Box} from '@material-ui/core'
import Header from "../../common/header";
import './index.css'
import {useState, useEffect} from "react";
import axios from "axios";
import {searchSetIsLoading, searchSetProductList} from '../../appRedux/actions'
import {connect} from "react-redux";

function Home(props) {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const {loading, setLoading} = props
    const [keyword, setKeyWord] = useState(() => {
        return props.match.params.keyword.split('+').join(' ')
    })

    const {productList, setProductList} = props

    const computeTime = (time) => {
        let time1 = new Date(time).getTime()
        let time2 = new Date().getTime()
        let d = 1000 * 60 * 60 * 24
        return Math.ceil((time2 - time1) / d)
    }

    const press = () => {
        const str = keyword.split(' ').join('+')
        props.history.push(`/search/${str}`)
    }

    const goTo = (id) => {
        props.history.push(`/product/${id}`)
    }


    useEffect(() => {
        const getData = () => {
            setLoading(true)

            const postData = {
                login_token: 'INTERVIEW_SIMPLY2021',
                search_phrase: keyword
            }
            axios.post('http://3.141.23.218:5000/interview/keyword_search', postData).then(res => {
                const data = res.data.data.products
                setProductList(data)
                setLoading(false)
            })
        }
        getData()
    }, [props.history.location])

    const change = (e) => {
        setKeyWord(e.target.value)
    }


    return (
        <Box align="center">
            <Header word={keyword} setWord={change} press={press}/>
            <div className={'con'}>
                <div className={'con-1'}>Related new products published in the last 7 days</div>
                <div className={'con-2'}>
                    {
                        loading ?
                            <div className={'loading'}>
                                {
                                    arr.map(x => (
                                        <div key={x} className={'active'}>
                                            <div className={'top'}/>
                                            <div className={'bottom'}/>
                                        </div>
                                    ))
                                }
                            </div> :
                            <div className={'no-loading'}>
                                {
                                    productList.map(x => (
                                        <div
                                            onClick={() => goTo(x.id)}
                                            key={x.id}
                                            className={'item'}>
                                            <div>
                                                <img src={x.image} alt="#"/>
                                            </div>
                                            <div>
                                                <div>published {computeTime(x.published_at)} days ago</div>
                                                <div>{x.title}</div>
                                                <div>${x.price}</div>
                                                <div>{x.store_domain}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        productList: state.search.productList,
        loading: state.search.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoading: flag => dispatch(searchSetIsLoading(flag)),
        setProductList: productList => dispatch(searchSetProductList(productList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);