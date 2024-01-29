import Image from "next/image";
import React from "react";

const getAllUsers = async () => {
	let res: any = await fetch("http://localhost:3000/api/user");
	let data = await res.json();
	return data.users.data;
};
const UserScreen = async () => {
	let users = await getAllUsers();
	console.log(users);
	return (
		<div>
			<h2 className="text-xl ">All Users</h2>
			{users.map((u: any) => {
				return (
					<div key={u.id}>
						<h3>
							<Image
								src={u.avatar}
								width={100}
								height={100}
								alt="Picture"
							/>
							{u.first_name} {u.last_name}
						</h3>
					</div>
				);
			})}
		</div>
	);
};

export default UserScreen;
