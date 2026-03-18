import React, { useContext } from 'react'
import { DataContext } from '../Helpers/Context';

import './styles/SkillsIcons.css';

import {
  SiTypescript,
  SiGit,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiGithubactions,
  SiPython,
  SiOpenai,
  SiHuggingface,
} from 'react-icons/si'

import Tooltip from '@mui/material/Tooltip';

const icons = [
  { label: 'TypeScript',     Icon: SiTypescript     },
  { label: 'Git',            Icon: SiGit            },
  { label: 'Linux',          Icon: SiLinux          },
  { label: 'Docker',         Icon: SiDocker         },
  { label: 'Kubernetes',     Icon: SiKubernetes     },
  { label: 'Express',        Icon: SiExpress        },
  { label: 'PostgreSQL',     Icon: SiPostgresql     },
  { label: 'MongoDB',        Icon: SiMongodb        },
  { label: 'Postman',        Icon: SiPostman        },
  { label: 'Bootstrap',      Icon: SiBootstrap      },
  { label: 'Tailwind CSS',   Icon: SiTailwindcss    },
  { label: 'Material UI',    Icon: SiMui            },
  { label: 'GitHub Actions',   Icon: SiGithubactions   },
  { label: 'Python',         Icon: SiPython         },
  { label: 'OpenAI',         Icon: SiOpenai         },
  { label: 'Hugging Face',   Icon: SiHuggingface    },
]

const SkillsIcons = () => {
  const { contextSkin, language } = useContext(DataContext)

  const iconColor = contextSkin ? '#9B9794' : '#7A706D'

  return (
    <div className='SkillsIcons'>
      <div className={contextSkin ? 'title-skills title-skills-dark' : 'title-skills'}>
        <p>{language ? 'Otras habilidades' : 'Other Skills'}</p>
      </div>

      <div className="icon-skills">
        {icons.map(({ label, Icon }) => (
          <Tooltip key={label} title={label} placement="top" arrow>
            <div className="icon-skill-svg">
              <Icon size={28} color={iconColor} />
            </div>
          </Tooltip>
        ))}
      </div>

      <div className="soft-skills">
        <p className="soft-skills-label">
          {language ? 'Habilidades blandas' : 'Soft Skills'}
        </p>
        <div className="soft-skills-tags">
          {(language ? [
            'Trabajo en equipo',
            'Comunicación',
            'Adaptabilidad',
            'Resolución de problemas',
            'Autodidacta',
            'Proactividad',
            'Metodologías ágiles',
          ] : [
            'Team Work',
            'Communication',
            'Adaptability',
            'Problem Solving',
            'Self-taught',
            'Proactivity',
            'Agile Methodologies',
          ]).map((skill) => (
            <span key={skill} className="soft-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsIcons
