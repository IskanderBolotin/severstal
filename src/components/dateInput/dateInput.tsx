import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/locale/ru_RU';

type DateInputProps = {
  value: string;
}

const DateInput: React.FC<DateInputProps> = ({ value }) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
        defaultValue={dayjs(value, "YYYY-MM-DD HH:mm:ss")}
        showTime={{ format: 'HH:mm:ss' }}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={(value, dateString) => {
          console.log('Selected Time: ', value);
          console.log('Formatted Selected Time: ', dateString);
        }}
        onOk={(value) => console.log(value)}
      />
    </ConfigProvider>
  )
}
export default DateInput;