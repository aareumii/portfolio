import styles from './Profile.module.scss';
import { BsGithub } from 'react-icons/bs';

const Profile = () => {
	return (
		<div className="page">
			<div>
				<h2>About.</h2>
				<div className={styles.profile_wrap}>
					<div className={styles.content}>
						<h3>profile</h3>
						<div className={styles.profile}>
							<div>
								<p>KIM AH REUM</p>
								<h4 className={styles.name}>김아름</h4>
							</div>
							<div className={styles.info}>
								<p>&#128241; 010.2967.5037</p>
								<p>&#128231; aarreum0307@gmail.com</p>

								<p>
									<BsGithub />
									<a> https://github.com/aareumii</a>
								</p>
							</div>
						</div>
						<h3>Experience Overview</h3>

						<div className={styles.content_experience}>
							<div>
								<h4> 경력</h4>
								<span>2019.07 ~ 2021.08 (주)단비 (SI업체)</span>

								<p>빅데이터팀 3년차 사원 </p>
								<p>주요 업무 : 빅데이터 시각화 및 분석</p>
							</div>
							<div>
								<h4> 교육이수 </h4>
								<span>2023.07 ~ 2023.12 슈퍼코딩 부트캠프</span>

								<p>프론트엔드 개발자 과정</p>
								<span>2023.01 ~ 2023.02 넵플러스</span>

								<p>
									프론트엔드 웹 개발자 양성 과정 <br /> HTML5, CSS3,
									자바스크립트(Java Script), 제이쿼리(JQuery), 리액트(React)
									수료
								</p>
							</div>
						</div>
						<div className={styles.education}>
							<h3>Education</h3>
							<div>
								<span>2008.03 ~ 2014.08 (졸업)</span> 부산외국어대학교
								한국어문학 / 부전공 일본어문학
							</div>

							<div>
								<span>2005.03 ~ 2008.02 (졸업)</span> 부산 혜화여자고등학교
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className={styles.arrow_btn}>
				<p>project</p>
				<div className={styles.arrow}>
					<HiArrowLongRight size={100} />
				</div>
			</div> */}
		</div>
	);
};

export default Profile;
