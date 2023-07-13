import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { AppBar, CssBaseline, IconButton, Paper, ThemeProvider, Toolbar, createTheme, useMediaQuery } from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from 'react';
import { Home as HomeComponent } from './home';
import githubSvg from '../assets/github.svg';
import repoSvg from '../assets/repo.svg';
import "../css/main.css";

const Main: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [listBG, setListBG] = useState<listBG>({ data: ['#2196F3', ' #2196F3', ' #2196F3'] })

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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <IconButton onClick={() => { window.open("https://github.com/dominus10/dominus10.github.io", '_blank') }}>
        <img src={repoSvg} className={mode ? 'svg' : 'svgInverse'} />
      </IconButton>
      <IconButton onClick={() => { window.open("https://github.com/dominus10/", '_blank') }}>
        <img src={githubSvg} className={mode ? 'svg' : 'svgInverse'} />
      </IconButton>
      <IconButton onClick={(e) => { stopProp(e); setMode((prev: boolean) => !prev); }}>{mode ? <Brightness4Icon /> : <Brightness7Icon sx={{ color: 'black' }} />}</IconButton>
    </div >
  )

  function stopProp(e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    e.stopPropagation()
  }

  return <ThemeProvider theme={mode ? themes.dark : themes.light}>
    <CssBaseline>
      <Paper sx={{ display: 'flex', height: '100vh' }}>
        <AppBar sx={{ background: 'transparent' }} elevation={0}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <ToolbarComponents />
          </Toolbar>
        </AppBar>

        <div style={{ display: 'flex', marginTop: 70, flex: '1 1 auto' }}>
          <HomeComponent />
        </div>
      </Paper>
    </CssBaseline>
  </ThemeProvider>
}

export default Main;
