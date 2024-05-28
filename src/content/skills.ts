import html from '../../public/img/icons/html.png';
import css from '../../public/img/icons/css.png';
import javascript from '../../public/img/icons/javascript.png';
import react from '../../public/img/icons/react.png';
import typescript from '../../public/img/icons/typescript.png';
import figma from '../../public/img/icons/figma.png';
import ps from '../../public/img/icons/ps.png';
import notion from '../../public/img/icons/notion.png';
import github from '../../public/img/icons/github.png';
import { Skill } from '../types';

export const skills: Skill[] = [
	{
		id: 1,
		skills: 'HTML',
		percent: '100%',
		content:
			'HTML 문서 구조와 기본 및 시맨틱 요소를 활용하여 접근성을 높이고, 다양한 폼과 미디어 요소를 구현할 수 있습니다.',
		image: html,
		category: 'Programming',
	},
	{
		id: 2,
		skills: 'CSS',
		percent: '90%',
		content:
			' CSS를 사용해 레이아웃을 디자인하고, 반응형 웹을 구현하며, Flexbox를 활용하여 효율적인 배치를 할 수 있습니다. 또한, 애니메이션 효과를 적용할 수 있습니다.',
		image: css,
		category: 'Programming',
	},
	{
		id: 3,
		skills: 'JavaScript',
		percent: '80%',
		content:
			' JavaScript를 통해 동적인 웹 애플리케이션을 개발할 수 있으며, 이벤트 핸들링을 학습했습니다.',
		image: javascript,
		category: 'Programming',
	},
	{
		id: 4,
		skills: 'React',
		percent: '80%',
		content:
			' React를 사용해 컴포넌트 기반의 인터페이스를 개발하고, 상태 관리와 훅스를 활용할 줄 알며, Redux와 Context API를 사용해 효율적인 상태 관리를 수행할 줄 압니다.',
		image: react,
		category: 'Programming',
	},
	{
		id: 5,
		skills: 'TypeScript',
		percent: '100%',
		content:
			'TypeScript를 사용해 코드에 타입을 추가하고, 코드 작성 시 발생할 수 있는 오류를 미리 잡아낼 수 있습니다.',
		image: typescript,
		category: 'Programming',
	},
	{
		id: 6,
		skills: 'Figma',
		percent: '100%',
		content: '디자인팀과의 협업이 가능한 정도의 활용이 가능합니다.',
		image: figma,
		category: 'Design',
	},
	{
		id: 7,
		skills: 'Photoshop',
		percent: '100%',
		content: 'Photoshop을 사용해 이미지 편집 정도의 활용이 가능합니다.',
		image: ps,
		category: 'Design',
	},
	{
		id: 8,
		skills: 'GitHub',
		percent: '100%',
		content:
			'GitHub를 사용해 소스 코드를 버전 관리하고, 협업을 통해 팀 프로젝트를 관리할 수 있습니다.',
		image: github,
		category: 'Collaboration',
	},
	{
		id: 9,
		skills: 'Notion',
		percent: '100%',
		content:
			'Notion을 사용해 프로젝트 관리를 수행하고, 문서화를 통해 팀 내 정보 공유를 원활하게 할 수 있습니다. 작업 보드와 캘린더를 활용해 업무를 체계적으로 관리할 줄 압니다',
		image: notion,
		category: 'Collaboration',
	},
];
