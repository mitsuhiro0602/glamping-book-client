import { useState, useEffect } from "react";

import { toast } from 'react-toastify';
import { read, updateGlamping } from '../actions/glamping';
import { useSelector } from "react-redux";
import GlampingEditForm from "../components/forms/GlampingEditForm";
import Image from 'react-image-resizer';


const EditGlamping = ({match}) => {

  // redux
  const { auth } = useSelector((state) => ({...state}));
  const { token } = auth;
  // state
  const [values, setValues] = useState({
    title: '',
    content: '',
    location: '',
    image: '',
    type: '',
    redirect_url: '',
    tags: [],
    price: '',
    from: '',
    to: '',
    person: '',
  });

  const {
    title,
    content,
    location,
    type,
    redirect_url,
    price,
    from,
    to,
    tags,
    person
  } = values

  const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');
  const [image, setImage] = useState("");

  useEffect(() => {
    locadSellerGlamping()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const locadSellerGlamping = async() => {
    let res = await read(match.params.glampingId)
    setValues({...values, ...res.data })
    setPreview(`${process.env.REACT_APP_API}/glamping/image/${res.data._id}`)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    let glampingData = new FormData()

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
      let res = await updateGlamping(token, glampingData, match.params.glampingId)
      toast.success(`${res.data.title}を更新しました`)
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch(err) {
      toast.error(err.response.data);
    }
  }

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0]);
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container-fluid">
        <h2>グランピング施設の編集</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <GlampingEditForm
              values={values}
              setValues={setValues}
              handleChange={handleChange}
              handleImageChange={handleImageChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="col-md-2">
            <Image
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
              height={250}
              width={400}
            />
            <pre>{JSON.stringify(values, null , 4)}</pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditGlamping