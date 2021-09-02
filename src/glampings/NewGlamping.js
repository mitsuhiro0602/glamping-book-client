import { useState } from "react"
import { toast } from "react-toastify";
import "@pathofdev/react-tag-input/build/index.css";
import {createGlamping} from '../actions/glamping'
import { useSelector } from "react-redux";
import GlampingCreateForm from "../components/forms/GlampingCreateForm";
import Image from 'react-image-resizer';


const NewGlamping = () => {

  // redux
  const { auth } = useSelector((state) => ({...state}));
  const { token } = auth;

  // state
  const [tags, setTags] = useState([])
  const [values, setValues] = useState({
    title: '',
    content: '',
    location: '',
    image: '',
    type: '',
    redirect_url: '',
    price: '',
    from: '',
    to: '',
    person: '',
    tag: '',
  });

  const {
    title,
    content,
    location,
    image,
    type,
    redirect_url,
    price,
    from,
    to,
    person
  } = values

  const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let glampingData = new FormData();
    glampingData.append('title', title)
    glampingData.append('content', content)
    glampingData.append('tags', tags)
    glampingData.append('location', location)
    glampingData.append('type', type)
    glampingData.append('redirect_url', redirect_url)
    glampingData.append('price', price)
    image && glampingData.append('image', image)
    glampingData.append('from', from)
    glampingData.append('to', to)
    glampingData.append('person', person)
     
    try {
      let res = await createGlamping(token, glampingData)
      console.log('GLAMPING CREATE RES' ,res)
      toast.success('新しいグランピング施設を登録しました')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err) {
      toast.error(err.response.data);
    }
  }

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]))
    setValues({...values, image: e.target.files[0] })
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container-fluid h1 p-5 text-center">
        <h2>グランピング施設を追加する</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <GlampingCreateForm 
              handleSubmit={handleSubmit}
              handleImageChange={handleImageChange}
              handleChange={handleChange}
              title={title}
              content={content}
              location={location}
              price={price}
              tags={tags}
              setTags={setTags}
              values={values}
              setValues={setValues}
              redirect_url={redirect_url}
              type={type}
              from={from}
              to={to}
              person={person}
            /> 
          </div>
          <div className="col-md-2">
            <Image
              src={preview} 
              alt="preview_image" 
              className="img img-fluid m-2" 
              height={ 250 }
              width={ 400 }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewGlamping
