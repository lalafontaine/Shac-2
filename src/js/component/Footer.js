import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		{/* <!-- Footer --> */}
		<div class="footer justify-content-center align-item-center">

			{/* <!-- Report a Problem? --> */}
			<div className=" m-3">
				<button type="button" className="report-problem btn btn-outline-primary"> Need to Report a Problem?</button>
			</div>

			{/* <!-- Socials --> */}
			<div id="socials" class="m-3">
				<i class="fab fa-instagram fa-2x"></i>
			</div>

		</div>
	</footer>
);
