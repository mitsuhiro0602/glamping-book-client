import {useState} from 'react'
import {DatePicker, Select, Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const { RangePicker } = DatePicker;
const { Option } = Select;



const Search = () => {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [person, setPerson] = useState('')
  const history = useHistory()

  const handleSubmit = () => {
    history.push(`/search-result?location=${location}&date=${date}&person=${person}`);
  }
  return (
    <div className="d-flex pb-4">
      <div className="w-100">
        <Input
          placeholder="Location"
          defaultValue={location}
          onChange={(l) => setLocation(l.value)}
          style={{ height: "50px" }}
        />
      </div>

      <RangePicker
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
        className="w-100"
      />

      <Select
        onChange={(value) => setPerson(value)}
        className="w-100"
        size="large"
        placeholder="定員人数"
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
        <Option key={5}>{5}</Option>
        <Option key={6}>{6}</Option>
        <Option key={7}>{7}</Option>
        <Option key={8}>{8}</Option>
        <Option key={9}>{9}</Option>
        <Option key={10}>{10}</Option>
      </Select>

      <SearchOutlined
        onClick={handleSubmit}
        className="btn btn-primary p-3 btn-square"
      />
    </div>
  )
}

export default Search
