import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { AppBar, Button, Container, CssBaseline, Divider, FormControlLabel, FormGroup, FormLabel, IconButton, Paper, Switch, ThemeProvider, Toolbar, Typography, createTheme, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import t from '../data/t.json'
import { StyledDiv, StyledImg, StyledLI, StyledOL } from './style'
import platformSvg from '../assets/platform.svg'

const Main: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileMenu, setMobileMenu] = useState<boolean>(isMobile ? true : false)

  const [listBG, setListBG] = useState<listBG>({ data: ['#2196F3', ' #2196F3', ' #2196F3'] })
  const [currentHoverIndex, setCurrentHoverIndex] = useState<HoverIndex>({ data: 4 })
  const [framework, setFramework] = useState<Filtered>({ data: [''] })
  const [language, setLanguage] = useState<Filtered>({ data: [''] })
  const [platform, setPlatform] = useState<Filtered>({ data: [''] })

  const [mode, setMode] = useState<boolean>(false);
  const themes = {
    dark: createTheme({
      palette: {
        mode: 'dark',
      },
    }),
    light: createTheme({
      palette: {
        mode: 'light',
      },
    }),
  };

  const ToolbarComponents = () => (
    <div style={{ display: 'flex', flexDirection: mobileMenu ? 'column' : 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={mode} onChange={(e) => { stopProp(e); setMode((prev: boolean) => !prev); }} onClick={(e) => stopProp(e)} />}
            label={<FormLabel sx={{ color: mode ? '#90caf9' : '#1976d2', fontSize: 14 }}>LIGHT | DARK</FormLabel>}
          />
        </FormGroup >
      </div>
      <Button onClick={(e) => { stopProp(e) }}>Project</Button>
      <Button onClick={(e) => { stopProp(e) }}>About</Button>
    </div >
  )

  function dataSort(keyName: keyof TechInterface, keyValue: string | number, targetKeyName: keyof TechInterface): string[] {
    const techData: TechInterface[] = t as TechInterface[];
    const matchingTargets: string[] = techData.reduce((acc: string[], cur: TechInterface) => {
      if (Array.isArray(cur[keyName])) {
        if ((cur[keyName] as string[]).includes(keyValue.toString())) {
          acc.push(cur[targetKeyName].toString());
        }
      }
      else if (cur[keyName] === keyValue) {
        acc.push(cur[targetKeyName].toString());
      }
      return acc;
    }, []);
    const uniqueTargets: string[] = matchingTargets.map((e: string, _: number) => {
      return e[0].toUpperCase() + e.slice(1)
    });
    return [...new Set(uniqueTargets)];
  }

  function flatArray(src: string[][]): string[] {
    const flattenedArray: string[] = src
      .flat()
      .reduce((acc: string[], cur: string) => acc.concat(cur.split(',')), []);

    const uppercase: string[] = flattenedArray.map((e: string, _: number) => {
      return e[0].toUpperCase() + e.slice(1)
    });
    return [...new Set(uppercase)];
  }

  function updateListBG(index: number) {
    if (currentHoverIndex.data == index) {
      setCurrentHoverIndex({ data: 4 })
      setListBG({ data: [' #2196F3', ' #2196F3', ' #2196F3'] })
    } else {
      setCurrentHoverIndex({ data: index })
      setListBG({
        data: [
          index === 0 ? ' #2196F3' : '#F5F5F5',
          index === 1 ? ' #2196F3' : '#F5F5F5',
          index === 2 ? ' #2196F3' : '#F5F5F5',
        ],
      });
    }
  }

  function stopProp(e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    e.stopPropagation()
  }

  function toggleMobileMenu() {
    setMobileMenu(prev => !prev)
  }

  useEffect(() => {
    const frameworkArr: string[] = [...new Set(flatArray([dataSort('fe', 1, 'name'), dataSort('target', 'web', 'name'), dataSort('target', 'server', 'name')]))];
    const languageArr: string[] = [...new Set(flatArray([dataSort('type', 'framework', 'lang')]))];
    const platformArr: string[] = [...new Set(flatArray([dataSort('fe', 0, 'target'), dataSort('fe', 1, 'target')]))];
    setFramework({ data: frameworkArr });
    setLanguage({ data: languageArr });
    setPlatform({ data: platformArr });
  }, []);

  return <ThemeProvider theme={mode ? themes.dark : themes.light}>
    <CssBaseline>
      <Paper sx={{ display: 'flex', height: '100vh' }}>
        <AppBar sx={{ background: 'transparent' }} elevation={0}>
          <Toolbar sx={{ display: 'flex', flexDirection: mobileMenu ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            {!isMobile && (
              <ToolbarComponents />
            )}
            {isMobile && (
              <>
                <div style={{ height: 56 }}>
                  <IconButton color="primary" onClick={() => toggleMobileMenu()}>
                    {isMobile && !mobileMenu ? <MenuIcon /> : <CloseIcon />}
                  </IconButton>
                </div>
                {mobileMenu && isMobile && (
                  <div style={{ background: 'rgba(0,0,0,0.7)', width: '100vw', height: '100vh' }} onClick={() => toggleMobileMenu()}>
                    <CssBaseline>
                      <Paper style={{ display: 'flex', flexDirection: 'column' }}>
                        <ToolbarComponents />
                      </Paper>
                    </CssBaseline>
                  </div>
                )}</>


            )}
          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', marginTop: 70 }}>
          {/* {[
          { title: 'Framework', data: framework.data },
          { title: 'Language', data: language.data },
          { title: 'Platform', data: platform.data }
        ].map((category: any, categoryIndex: number) => (
          <Container key={categoryIndex}>
            <Typography variant='h6'>{category.title}</Typography>
            <Divider style={{ marginBottom: 10 }} />
            {category.data.map((element: string, index: number) => (
              <Button key={index} variant="outlined" style={{ padding: '1px 5px', fontSize: 12, width: 100 }}>
                {element}
              </Button>
            ))}
          </Container>
        ))} */}
          <StyledOL>
            {[0, 1, 2].map((index) => (
              <StyledLI key={index}>
                <StyledDiv
                  onClick={() => updateListBG(index)} style={{
                    border: `1px solid ${listBG.data[index]}`,
                    borderRadius: 10, 
                    filter: index == currentHoverIndex.data ? 'none' : 4 == currentHoverIndex.data ? 'none' : 'grayscale(0.90)',
                    opacity: index == currentHoverIndex.data ? 0.8 : 4 == currentHoverIndex.data ? 0.8 : 0.08
                  }}>
                  <StyledImg src={platformSvg} />
                </StyledDiv>
              </StyledLI>
            ))}
          </StyledOL>
        </div>
      </Paper>
    </CssBaseline>
  </ThemeProvider>
}

export default Main;
