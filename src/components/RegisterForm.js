import React from 'react'

const RegisterForm = (
  {
    handleSubmit, 
    name, 
    setName, 
    email, 
    setEmail, 
    password, 
    setPassword
  }) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">名前</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="名前を入力してください" 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">メールアドレス</label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="メールアドレスを入力してください" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">パスワード</label>
        <input 
          type="password" 
          className="form-control" 
          placeholder="パスワードを入力してください" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button disabled={!name || !email || !password} className="btn btn-primary">登録する</button>
    </form>
  )
}

export default RegisterForm
