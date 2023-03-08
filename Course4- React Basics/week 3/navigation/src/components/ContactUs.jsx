import React from "react";
import { useForm } from "react-hook-form";
const ContactUs = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<div className="contact-us">
			<h1>Contact Us</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem mollitia
				necessitatibus et obcaecati atque dolorem sit, omnis ad placeat, quae
				expedita, impedit sequi accusamus repudiandae ipsa. Praesentium nobis
				quis aperiam. Repellendus laboriosam accusamus ducimus. Animi quia sit,
				corporis id repellat eligendi provident voluptatem esse, non consectetur
				voluptate totam sed unde? Illum maiores eos laudantium nobis ab
				asperiores, id ut nulla!
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>First Name</label>
				<input
					{...register("firstName", {
						required: true,
						maxLength: 20,
						pattern: /^[A-Za-z]+$/i,
					})}
				/>
				{errors?.firstName?.type === "required" && (
					<p>This field is required</p>
				)}
				{errors?.firstName?.type === "maxLength" && (
					<p>First name cannot exceed 20 characters</p>
				)}
				{errors?.firstName?.type === "pattern" && (
					<p>Alphabetical characters only</p>
				)}
				<label>Last Name</label>
				<input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
				{errors?.lastName?.type === "pattern" && (
					<p>Alphabetical characters only</p>
				)}
				<label>Age</label>a
				<input {...register("age", { min: 18, max: 99 })} />
				{errors.age && (
					<p>You Must be older then 18 and younger then 99 years old</p>
				)}
				<input type="submit" />
			</form>
		</div>
	);
};

export default ContactUs;
