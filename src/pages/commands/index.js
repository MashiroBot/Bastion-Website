import React from 'react';
import SiteHead from '../../components/SiteHead';
import Link from 'gatsby-link';
import showdown from 'showdown';
import axios from 'axios';
import meta from './meta.json';
import ExternalLink from '../../components/ExternalLink.js';
import NoResultsFound from '../../components/NoResultsFound';
import { TextPlaceholder } from '../../components/Placeholder';
import './index.css';

const converter = new showdown.Converter();


class CommandsPlaceholder extends React.Component {
  render() {
    return(
      <tr>
        <td>
          <TextPlaceholder minOffset='70' maxOffset='25' />
          <TextPlaceholder minOffset='70' maxOffset='25' />
        </td>
        <td>
          <TextPlaceholder minOffset='15' maxOffset='25' />
          <TextPlaceholder minOffset='50' maxOffset='75' />
        </td>
      </tr>
    );
  }
}


class CommandsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noResultsFound: false
    };
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/ColinFL/MashiroBot/master/cmdsru.json')
      .then(res => {
        let commands = [];
        for (let module of Object.keys(res.data)) {
          for (let command of Object.keys(res.data[module])) {
            commands.push({
              name: command,
              module: module.replace(/_/, ' '),
              description: res.data[module][command]
            });
          }
        }

        this.setState({
          commands: commands
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  filterCommands() {
    let input = document.getElementById('commandFilter');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('commandsTable');
    let tr = table.getElementsByClassName('command');

    for (let i = 0; i < tr.length; i++) {
      let commands = tr[i].getElementsByTagName('td')[0];
      let descriptions = tr[i].getElementsByTagName('td')[1];
      if (commands || descriptions) {
        if (commands.innerHTML.toLowerCase().indexOf(filter) > -1 || descriptions.innerHTML.toLowerCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        }
        else {
          tr[i].style.display = 'none';
        }
      }
    }

    tr = Array.from(tr);
    let hiddenRows = tr.filter(row => row.style.display !== 'none');
    if (hiddenRows.length) {
      table.style = 'display: table;';
      this.setState({
        noResultsFound: false
      });
    }
    else {
      table.style = 'display: none;';
      this.setState({
        noResultsFound: true
      });
    }
  }

  render() {
    return (
      <div id='commands'>
        <SiteHead
          title={ meta.title }
          description={ meta.description }
          image={ meta.image }
        />

        <div className='header'>
          <h1>Список команд Маширо</h1>
          <p>
            Посмотрите список команд который вы можете использовать с Маширо!<br />
            Стандартный префикс Маширо бота <code>.</code>
          </p>
          <div>
            <input
              id='commandFilter'
              type='text'
              placeholder='🔍 Поиск команд'
              onKeyUp={ () => this.filterCommands() }
            />
          </div>
        </div>

        <div className='container'>
        <table id='commandsTable' cellSpacing='0' cellPadding='0' width='100%'>
            <thead>
              <tr>
                <td style={{ width: '30%' }}>
                  Команда
                </td>
                <td style={{ width: '70%' }}>
                  Описание
				</td>
              </tr>
            </thead>
            {
              this.state.commands
              ? <tbody>
                {
                  this.state.commands.map((command, i) => {
                    return (
                      <tr className='command' key={ i }>
                        <td>
                          <div className='commandName'>
                            <code>{ command.name }</code>
                          </div>
                          <div
                            className='commandModule'
                            title={ `Это команда из модуля ${command.module}` }
                          >
                            <code>{ command.module }</code>
                          </div>
                        </td>
                        <td>
                          <div
                            className='commandDescription'
                            dangerouslySetInnerHTML={{ __html: converter.makeHtml(command.description) }}
                          />
                        </td>
                      </tr>
                    );
                  })
                }
                </tbody>
              : <tbody>
                  {
                    Array.apply(null, Array(~~(Math.random() * 2) ? 5 : 6)).map((e, i) => {
                      return (
                        <CommandsPlaceholder />
                      );
                    })
                  }
                </tbody>
            }
          </table>
          {
            this.state.noResultsFound
            ? <NoResultsFound />
            : ''
          }
        </div>
      </div>
    );
  }
}


export default CommandsPage;
