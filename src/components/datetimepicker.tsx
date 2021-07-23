import dayjs from 'dayjs';
import React, { FC } from 'react';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateDatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';
import 'antd/dist/antd.css'
// Add Japanese Locale
import jaJP from 'antd/lib/locale/ja_JP';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/ja';
dayjs.locale('ja')

const DatePicker = generateDatePicker<dayjs.Dayjs>(dayjsGenerateConfig);

const DateTimePicker: FC = () => {
    return (  
      <div>
         <ConfigProvider locale={jaJP}>
           <DatePicker format="YYYY/MM/DD HH:mm 以前" placeholder="select date" showTime />     
         </ConfigProvider>
      </div>
    );
};

export default DateTimePicker;