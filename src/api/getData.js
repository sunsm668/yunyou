import { getJSON } from './ajax';
import { SUCC_CODE, TIMEOUT} from './config';


/**
 * 获取数据
 * @param {*} url 
 * @param {*} options 
 * @returns 
 */
const getData = (url, options) => {
    return getJSON(url, {
        timeoutTime: TIMEOUT, //超时时间
        ...options
    }).then(response => {
        // {
        //     code:200,
        //     data[]
        // }
        if(response.code !== SUCC_CODE)
            throw new Error(`出错了${response.code}`);
        return response.data;
    })
    .catch(err => {
        console.log(err);
    });
}

// 延时
const delay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

// 获取延迟的数据
const getDelayedData = (url, options) => {
  return delay(1000).then(() => {
    return getData(url, options);
  });
};



export { getData, getDelayedData };
