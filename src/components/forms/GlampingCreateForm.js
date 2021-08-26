import { DatePicker, Select } from 'antd'
import moment from 'moment'
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";


const {Option} = Select


const GlampingCreateForm = (
  {
    handleSubmit,
    handleImageChange,
    handleChange,
    tags,
    setTags,
    values,
    setValues,
  }
) => {

  // eslint-disable-next-line no-unused-vars
  const { title, content, price, location, redirect_url, type } = values;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="btn btn-outline-secondary btn-block m-2 text-left">
            Image
            <input 
              type="file" 
              name="image" 
              onChange={handleImageChange} 
              accept="image/*"
              hidden
            />
          </label>
          <input 
            type="text" 
            name="title" 
            onChange={handleChange} 
            placeholder="Title" 
            className="form-control m-2" 
            value={title} 
          />
          <textarea 
            name="content" 
            onChange={handleChange} 
            placeholder="Content" 
            className="form-control m-2" 
            value={content} 
          />
          <input 
            type="text"
            name="location"
            onChange={handleChange}
            className="form-control m-2"
            placeholder="Location"
            value={location}
            style={{ height: "50px" }}
          />
          <input 
            type="number" 
            name="price" 
            onChange={handleChange} 
            placeholder="Price" 
            className="form-control m-2" 
            value={price} 
          />
          <ReactTagInput
            placeholder="タグ名を入力してください"
            tags={tags} 
            onChange={( newTags) => setTags(newTags)}
          />
          
          <Select
            onChange={(value) => setValues({...values, bed: value})} 
            placeholder="定員人数" 
            className="w-100 m-2"
            size="large"
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
          <Select
            onChange={(value) => setValues({...values, type: value})} 
            placeholder="自社決済=1、他社決済=2" 
            className="w-100 m-2"
            size="large"
          >
            <Option key={1}>{1}</Option>
            <Option key={2}>{2}</Option>
          </Select>
          <input 
            type="text" 
            name="redirect_url" 
            onChange={handleChange} 
            placeholder="他社決済の場合、リダイレクトURLを入力してください" 
            className="form-control m-2" 
            value={redirect_url} 
          />
        </div>
        <DatePicker 
          placeholder="From date" 
          className="form-control m-2" 
          onChange={(date, dateString) => 
            setValues({...values, from: dateString})
          }
          disabledDate={(current) => 
            current  && current.valueOf() < moment().subtract(1, 'days')
          }
        />
        <DatePicker 
          placeholder="To date" 
          className="form-control m-2" 
          onChange={(date, dateString) => setValues({...values, to: dateString})}
          disabledDate={(current) => 
            current  && current.valueOf() < moment().subtract(1, 'days')
          }
        />
        <button className="btn btn-outline-primary m-2">Save</button>
      </form>
    </>
  )
}

export default GlampingCreateForm
