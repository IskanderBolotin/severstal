import { Select } from "antd";
import s from "./selectStatus.module.scss";

const options = [
  {
    value: 1,
    label: "Собирается",
  },
  {
    value: 2,
    label: "Готов к выдаче",
  },
  {
    value: 3,
    label: "Выдан",
  },
  {
    value: 4,
    label: "Отменён",
  },
];

type SelectStatusProps = {
  status_id: number;
  isError?: boolean
  selectHandler: (status_id: number) => void
};

const SelectStatus: React.FC<SelectStatusProps> = ({ status_id, isError = false, selectHandler }) => {
  const handleChange = (value: number) => {
    selectHandler(value);
  };

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
    <div className={s.wrapper}>
      <Select 
        className={s.select}
        defaultValue={options.find((item => item.value === status_id)) as any}
        onChange={handleChange}
        options={options}
        {
          ...selectProps()
        }
      />
    </div>
  );
};

export default SelectStatus;
