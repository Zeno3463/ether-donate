import React, { useCallback, useState } from 'react'
import NavBar from '../components/NavBar'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});
import 'react-quill/dist/quill.snow.css'

const NewPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState('');

	return (
		<>
			<NavBar />
			<div className='flex flex-col m-10'>
				<input type="Text" placeholder='title' className='shadow-2xl my-5 p-3 w-1/2 rounded-lg outline-none' />
				<div className='shadow-2xl my-5 p-3 rounded-lg outline-none'>
					<ReactQuill value={description} onChange={setDescription} />
				</div>
				<div>
					<button className='py-3 px-5 gradient-button my-5'>Launch!</button>
				</div>
			</div>
		</>
	)
}

export default NewPage