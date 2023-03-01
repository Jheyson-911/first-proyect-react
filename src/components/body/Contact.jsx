export const Contact = () => {
  return (
    <div
      className='section-item mt-2'
      id='Contact'
    >
      <h3 className='title-style'>Contact Me</h3>
      <p className='parraf-style'>
        Integer eu ante ornare amet commetus vestibulum blandit integer in curae
        ac faucibus integer non. Adipiscing cubilia elementum integer. Integer
        eu ante ornare amet commetus.
      </p>
      <form className='grid grid-cols-1 gap-5 my-5 md:mb-0 cel:grid-cols-2'>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Name'
            className='input-style'
          />
        </div>
        <div className='input-container'>
          <input
            type='text'
            placeholder='Email'
            className='input-style'
          />
        </div>
        <div className='input-container cel:col-span-2'>
          <input
            type='text'
            placeholder='Subject'
            className='input-style'
          />
        </div>
        <div className='cel:col-span-2'>
          <textarea
            name=''
            id=''
            cols='24'
            rows='5'
            placeholder='Message'
            className='input-style resize-none'
          ></textarea>
        </div>
        <button className='bg-green-main button-style'>Send Message</button>
        <button className='bg-content-color button-style'>Reset Form</button>
      </form>
    </div>
  );
};
