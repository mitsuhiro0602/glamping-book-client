import { useState } from "react"
import { toast } from "react-toastify";
import "@pathofdev/react-tag-input/build/index.css";
import {createGlamping} from '../actions/glamping'
import { useSelector } from "react-redux";
import GlampingCreateForm from "../components/forms/GlampingCreateForm";


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
    bed: '',
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
    bed
  } = values

  const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let glampingDate = new FormData();
    glampingDate.append('title', title)
    glampingDate.append('content', content)
    glampingDate.append('tags', tags)
    glampingDate.append('location', location)
    glampingDate.append('type', type)
    glampingDate.append('redirect_url', redirect_url)
    glampingDate.append('price', price)
    image && glampingDate.append('image', image)
    glampingDate.append('from', from)
    glampingDate.append('to', to)
    glampingDate.append('bed', bed)
    
    console.log([...glampingDate])
    
    try {
      let res = await createGlamping(token, glampingDate)
      console.log('GLAMPING CREATE RES' ,res)
      toast.success('新しいグランピング施設を登録しました')
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err) {
      console.log(err)
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
            /> 
          </div>
          <div className="col-md-2">
            <img 
              src={preview} 
              alt="preview_image" 
              className="img img-fluid m-2" 
            /> 
            <pre>{JSON.stringify(values, null, 4)}</pre>
            <pre>{JSON.stringify(tags, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewGlamping
