import axios from 'axios'
import React, {Component} from 'react'

class CreateEditNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            noteID: this.props.match.params.id,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateEditNote = this.handleCreateEditNote.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleCreateEditNote(event) {
        event.preventDefault();

        const {history} = this.props;

        const note = {
            title: this.state.title,
            content: this.state.content
        };

        if (this.state.noteID) {
            try {
                const response = await axios.post(`/api/note/${this.props.match.params.id}/update`, note);

                history.push('/')
            } catch (e) {

            }

        } else {
            axios.post('/api/notes', note)
                .then(response => history.push('/'))
                .catch(error => {
                    this.setState({
                        errors: error.response.data.errors
                    })
                })
        }
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
              <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }

    async componentDidMount() {
        if (this.state.noteID) {
            try {
                const response = await axios.get(`/api/note/${this.props.match.params.id}`);

                this.setState({
                    title: response.data.title,
                    content: response.data.content
                })

            } catch (e) {

            }
        }
    }

    render() {
        const {title, content, noteID} = this.state;

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>{noteID ? 'Update note' : 'Create new note'}</div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateEditNote}>
                                    <div className='form-group'>
                                        <label htmlFor='title'>Note title</label>
                                        <input
                                            id='title'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
                                            name='title'
                                            value={title}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('title')}
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='content'>Note content</label>
                                        <textarea
                                            id='content'
                                            className={`form-control ${this.hasErrorFor('content') ? 'is-invalid' : ''}`}
                                            name='content'
                                            rows='10'
                                            value={content}
                                            onChange={this.handleFieldChange}
                                        />
                                        {this.renderErrorFor('content')}
                                    </div>
                                    <button className='btn btn-primary'>{noteID ? 'Update' : 'Create'}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEditNote
