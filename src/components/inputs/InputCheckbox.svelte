<script>
    export let checked;
    export let value;

    $: if(checked) {
        console.log(value)
    }
</script>

<label>
    <input type="checkbox" bind:checked={checked} value={value}>
    <span>
        <slot></slot>
    </span>
</label>

<style lang=scss>
    label {
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
            span {
                opacity: .8;
                &:before {
                    background: var(--bg-color);
                    opacity: .8
                }
            }
        }
    }
    input[type=checkbox] {
        appearance: none;
        position: absolute;
    }

    span {
        position: relative;
        padding-left: 35px;
        transition: .2s;
        &:before {
            content: '';
            position: absolute;
            top: calc(50% - 10px);
            border-radius: 4px;
            left: 0px;
            width: 20px;
            height: 20px;
            border: 1px solid #eee;
            background: #fff;
            transition: .2s;
        }
    }

    input:checked + span::before {
        background: url(check.svg) no-repeat center;
        background-size: 14px;
        background-color: #2baf8a;
    }
</style>