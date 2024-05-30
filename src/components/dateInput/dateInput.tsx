import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import locale from 'antd/locale/ru_RU';

type DateInputProps = {
  value: string;
  isError?: boolean;
  inputHandler: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, isError = false, inputHandler }) => {
  const selectProps = () => {
    let props = {}
    if (isError) {
      props = {
        ...props,
        status: "error"
      }
    }
    return props;
  };

  return (
    <ConfigProvider locale={locale}>
      <DatePicker
        defaultValue={dayjs(value, "YYYY-MM-DD HH:mm:ss")}
        showTime={{ format: 'HH:mm:ss' }}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={(_, dateString) => {
          inputHandler(dateString as string)
        }}
        {
          ...selectProps()
        }
      />
    </ConfigProvider>
  )
}
export default DateInput;